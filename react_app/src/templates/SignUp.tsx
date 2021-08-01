import React, { useCallback, useState } from 'react';
import { TextInput, PrimaryButton } from '../components/Ukit';
import { signUp } from '../redux/users/operations';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState(''),
    [email, setEmail] = useState(''),
    [password, setPassword] = useState(''),
    [confirmPassword, setConfirmPassword] = useState('');

  const inputUsername = useCallback(
    (event) => {
      setUsername(event.target.value);
    },
    [setUsername]
  );

  const inputEmail = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );

  const inputPassword = useCallback(
    (event) => {
      setPassword(event.target.value);
    },
    [setPassword]
  );

  const inputConfirmPassword = useCallback(
    (event) => {
      setConfirmPassword(event.target.value);
    },
    [setConfirmPassword]
  );

  return (
    <>
      <div className='form'>
        <div className='form-input'>
          <TextInput
            fullWidth={true}
            label={'ユーザー名'}
            multiline={false}
            required={true}
            rows={1}
            value={username}
            type={'text'}
            onChange={inputUsername}
          />
          <TextInput
            fullWidth={true}
            label={'Eメール'}
            multiline={false}
            required={true}
            rows={1}
            value={email}
            type={'email'}
            onChange={inputEmail}
          />
          <TextInput
            fullWidth={true}
            label={'パスワード'}
            multiline={false}
            required={true}
            rows={1}
            value={password}
            type={'password'}
            onChange={inputPassword}
          />
          <TextInput
            fullWidth={true}
            label={'確認用パスワード'}
            multiline={false}
            required={true}
            rows={1}
            value={confirmPassword}
            type={'password'}
            onChange={inputConfirmPassword}
          />
          <div className='form-button'>
            <PrimaryButton
              label={'登録'}
              onClick={() =>
                dispatch(signUp(email, password, username, confirmPassword))
              }
            />
          </div>
        </div>
      </div>
      <div className="change-form">
        <Link to='/login' style={{ textDecoration: 'none', color: 'black' }}>
          ログインの方はこちらから
        </Link>
      </div>
    </>
  );
};
export default SignUp;
