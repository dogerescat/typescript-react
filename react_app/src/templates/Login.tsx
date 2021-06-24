import React, {useCallback, useState } from 'react';
import { TextInput, PrimaryButton } from '../components/Ukit';
import { signIn } from '../redux/users/operator';
import { useDispatch } from 'react-redux';

const SignIn = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState(''),
          [password, setPassword] = useState('');

    const inputEmail = useCallback((event) => {
        setEmail(event.target.value);
    }, [setEmail]);

    const inputPassword = useCallback((event) => {
        setPassword(event.target.value);
    }, [setPassword]);


    return (
        <>
            <div className="form">
                <div className="form-input">
                    <TextInput
                        fullWidth={true} label={"Eメール"} multiline={false} required={true} rows={1} value={email} type={'email'} onChange={inputEmail}
                    />
                    <TextInput
                        fullWidth={true} label={"パスワード"} multiline={false} required={true} rows={1} value={password} type={'password'} onChange={inputPassword}
                    />
                    <div className="form-button">
                        <PrimaryButton
                            label={"ログイン"}
                            onClick={() => dispatch(signIn(email, password))}
                        />
                    </div>
                </div>
            </div>
        </>
    ) 
}
export default SignIn;