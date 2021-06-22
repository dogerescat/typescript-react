import React, {useCallback, useState } from 'react';
import { TextInput, PrimaryButton } from '../components/Ukit';
import { signUp } from '../redux/users/operator';
import { useDispatch } from 'react-redux';

const SignUp = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState(''),
          [email, setEmail] = useState(''),
          [password, setPassword] = useState(''),
          [confirmPassword, setConfirmPassword] = useState('');

    const inputUsername = useCallback((event) => {
        setUsername(event.target.value);
    }, [setUsername]);

    const inputEmail = useCallback((event) => {
        setEmail(event.target.value);
    }, [setEmail]);

    const inputPassword = useCallback((event) => {
        setPassword(event.target.value);
    }, [setPassword]);

    const inputConfirmPassword = useCallback((event) => {
        setConfirmPassword(event.target.value);
    }, [setConfirmPassword]);

    return (
        <>
            <TextInput
                fullWidth={true} label={"ユーザー名"} multiline={false} required={true} rows={1} value={username} type={'text'} onChange={inputUsername}
            />
            <TextInput
                fullWidth={true} label={"Eメール"} multiline={false} required={true} rows={1} value={email} type={'email'} onChange={inputEmail}
            />
            <TextInput
                fullWidth={true} label={"パスワード"} multiline={false} required={true} rows={1} value={password} type={'password'} onChange={inputPassword}
            />
            <TextInput
                fullWidth={true} label={"確認用パスワード"} multiline={false} required={true} rows={1} value={confirmPassword} type={'password'} onChange={inputConfirmPassword}
            />
            <div>
                <PrimaryButton
                    label={"登録"}
                    onClick={() => dispatch(signUp(username, email, password, confirmPassword))}
                />
            </div>
        </>
    ) 
}
export default SignUp;