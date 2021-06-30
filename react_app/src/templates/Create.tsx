import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { PrimaryButton, TextInput } from '../components/Ukit';
import { saveMemo } from '../redux/memos/operations';

const Create = () => {
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
          value={memo}
          onChange={inputMemo}
          style={{padding: 10}}
        />
      </div>
      <div className='create-button'>
        <PrimaryButton
          label='メモ'
          onClick={() => {
            dispatch(saveMemo(memo, title));
          }}
        />
      </div>
    </>
  );
};
export default Create;
