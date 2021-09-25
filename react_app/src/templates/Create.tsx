import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../redux/users/types';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { PrimaryButton, TextInput, ImageArea } from '../components/Ukit';
import { saveMemo } from '../redux/memos/operations';
import { storage, db } from '../firebase';
import { getUserId } from '../redux/users/selectors';

interface Image {
  id: string;
  path: string;
}

const Create = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const selector = useSelector((state: State) => state);
  const userId = getUserId(selector);
  const [memo, setMemo] = useState('');
  const [image, setImage] = useState<Image>({id: '', path: ''});

  const inputTitle = useCallback(
    (event) => {
      setTitle(event.target.value);
    },
    [setTitle]
  );
  
  const inputMemo = useCallback(
    (event) => {
      let text = event.target.value;
      let count = 0;
      for(let i = 0; i < text.length; i++) {
        if(text[i] === '\n') {
          ++count;
        }
      }
      if(count > 10) {
        window.alert('10行以上のメモはできません')
      }
      let charCheck = 0;
      for(let i = 0; i < text.length; i++) {
        if(!text.match(/^[\x20-\x7e]*$/)) {
          ++charCheck;
        }
      }
      if(text.length + charCheck/2 > 500) {
        window.alert(`${500 - charCheck/2}文字以上のメモはできません`)
        text = text.slice(0, 499 - charCheck/2);
      }
      setMemo(text);
    },
    [setMemo]
  );
  
  const uploadImage = useCallback((event: any) => {
    const memoRef = db.collection('memos').doc();
    const id = memoRef.id;  
    const file = event.target.files;
    let blob = new Blob(file, {type: "image/jpeg"});
    const uploadRef = storage.ref('images/'+ userId).child(id);
    const uploadTask = uploadRef.put(blob);
    uploadTask.then(() => {
      uploadTask.snapshot.ref.getDownloadURL().then((downloadUrl) => {
        const newImage = {id: id, path: downloadUrl};
        setImage(newImage);
      })
    })
  },[setImage, userId]);

  const deleteImage = useCallback(async(id) => {
    const ret = window.confirm('really?');
    if(!ret) {
      return false;
    }
    setImage({id: '', path: ''});
    return storage.ref('images/'+userId).child(id).delete();
  },[setImage, userId]);

  let previewImage: any;
  if(image.id) {
    previewImage = <ImageArea id={image.id} path={image.path} deleteImage={() => deleteImage(image.id)} />;
  } else {
    previewImage = (
      <>
        <label>
          <p className="image-text">画像をアップロードする</p>
          <input className="input-none" type="file" onChange={(event) => uploadImage(event)}/>
        </label>
      </>
    )
  }
  
  return (
    <>
      <div className='create-title'>
        <TextInput
          fullWidth={true}
          label={'title'}
          multiline={false}
          required={true}
          rows={1}
          value={title}
          type={'text'}
          onChange={inputTitle}
        />
      </div>
      <div className='create-textarea'>
        <TextareaAutosize
          aria-label='minimum height'
          rows={8}
          cols={70}
          value={memo}
          onChange={inputMemo}
          style={{padding: 10}}
        />
      </div>
      <div className='create-button'>
        <PrimaryButton
          label='メモ'
          onClick={() => {
            dispatch(saveMemo(memo, title, '', image.id));
          }}
        />
      </div>
      
      {previewImage}
    </>
  );
};
export default Create;
