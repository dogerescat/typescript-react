import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { db, storage } from '../firebase';
import { FirebaseDocSnapshotData} from '../firebase/types';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { PrimaryButton, TextInput, ImageArea } from '../components/Ukit';
import { saveMemo } from '../redux/memos/operations';
import { getUserId } from '../redux/users/selectors';
import { State } from '../redux/users/types';
interface Image {
  id: string;
  path: string;
}

const Edit = (props: any) => {
    let uid = props.match.params.id;
    const selector = useSelector((state: State) => state);
    const userId = getUserId(selector);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [imageId, setImageId] = useState('');
    const dispatch = useDispatch();
    const [image, setImage] = useState<Image>({id: '', path: ''});

    if(!uid) { 
        dispatch(push('/folder'));
    }

    const inputTitle = useCallback((event) => {
        setTitle(event.target.value);
    },[setTitle]);

    const inputContent = useCallback((event) => {
        setContent(event.target.value);
    },[setContent]);

    const deleteImage = useCallback(async(id) => {
      const ret = window.confirm('really?');
      if(!ret) {
        return false;
      }
      setImage({id: '', path: ''});
      return storage.ref('images/'+ userId).child(id).delete()
       .then(() => {
         dispatch(saveMemo(content, title, uid, ''));
       })
    },[dispatch, setImage, userId, title, content, uid]);
  
    useEffect(() => {
        if(uid !== '') {
            db.collection('memos').doc(uid).get().then((snapshot: FirebaseDocSnapshotData) => {
                const memo = snapshot.data();
                setTitle(memo?.title);
                setContent(memo?.content);
                setImageId(memo?.imageId);
                if(memo?.imageId !== '') {
                  const storageRf = storage.ref('images/'+ userId).child(memo?.imageId);
                  storageRf.getDownloadURL().then((url) => {
                    const newImage = {id: memo?.imageId, path: url}
                    setImage(newImage);
                  }).catch((error) => {
                    throw new Error(error);
                  })
                }
            });
        }
    },[uid, userId]);
    let previewImage: any;
    if(image.id) {
      previewImage = <ImageArea id={image.id} path={image.path} deleteImage={() => deleteImage(image.id)} />
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
          rows={10}
          cols={100}
          value={content}
          onChange={inputContent}
          style={{padding: 10}}
        />
      </div>
      <div className='create-button'>
        <PrimaryButton
          label='編集'
          onClick={() => {
            dispatch(saveMemo(content, title, uid, imageId));
          }}
        />
      </div>
      {previewImage}
      </>
    )
}

export default Edit;