import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { PrimaryButton, TextInput, ImageArea } from '../components/Ukit';
import { saveMemo } from '../redux/memos/operations';
import { storage, db } from '../firebase';

interface Image {
  id: string;
  path: string;
}

const Create = () => {
  const memoRef = db.collection('memos').doc();
  const id = memoRef.id;
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const inputTitle = useCallback(
    (event) => {
      setTitle(event.target.value);
    },
    [setTitle]
  );
  const [memo, setMemo] = useState('');
  const inputMemo = useCallback(
    (event) => {
      setMemo(event.target.value);
    },
    [setMemo]
  );
  const [image, setImage] = useState<Image>({id: '', path: ''});
  const uploadImage = useCallback((event: any) => {
    const file = event.target.files;
    let blob = new Blob(file, {type: "image/jpeg"});
    const uploadRef = storage.ref('images').child(id);
    const uploadTask = uploadRef.put(blob);
    uploadTask.then(() => {
      uploadTask.snapshot.ref.getDownloadURL().then((downloadUrl) => {
        const newImage = {id: id, path: downloadUrl};
        setImage(newImage);
      })
    })
  },[setImage, id]);
  const deleteImage = useCallback(async(id) => {
    const ret = window.confirm('really?');
    if(!ret) {
      return false;
    }
    setImage({id: '', path: ''});
    return storage.ref('images').child(id).delete();
  },[setImage])
  let previewImage: any;
  if(image.id) {
    previewImage = <ImageArea id={image.id} path={image.path} deleteImage={() => deleteImage(image.id)} />;
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
          rowsMin={15}
          rows={8}
          cols={100}
          value={memo}
          onChange={inputMemo}
          style={{padding: 10}}
        />
      </div>
      <div className='create-button'>
        <PrimaryButton
          label='メモ'
          onClick={() => {
            dispatch(saveMemo(memo, title, ''));
          }}
        />
      </div>
      <label>
        <p className="image-text">画像をアップロードする</p>
        <input className="input-none" type="file" onChange={(event) => uploadImage(event)}/>
      </label>
      {previewImage}
    </>
  );
};
export default Create;
