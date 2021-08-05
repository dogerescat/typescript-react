import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { db } from '../firebase';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { PrimaryButton, TextInput } from '../components/Ukit';
import { saveMemo } from '../redux/memos/operations';

const Edit = (props: any) => {
    let id = props.match.params.id;
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [imageId, setImageId] = useState('');
    const dispatch = useDispatch();

    if(!id) { 
        dispatch(push('/folder'));
    }

    const inputTitle = useCallback((event) => {
        setTitle(event.target.value);
    },[setTitle]);

    const inputContent = useCallback((event) => {
        setContent(event.target.value);
    },[setContent]);

    useEffect(() => {
        if(id !== '') {
            db.collection('memos').doc(id).get().then((snapshot: any) => {
                const memo = snapshot.data();
                setTitle(memo.title);
                setContent(memo.content);
                setImageId(memo.imageId);
            });
        }
    },[id]);

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
            dispatch(saveMemo(content, title, id, imageId));
          }}
        />
      </div>
      </>
    )
}

export default Edit;