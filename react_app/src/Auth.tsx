import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIsSignedIn } from './redux/users/selectors';
import { State } from './redux/users/types';
import { listenAuthState } from './redux/users/operations';
import { Login } from './templates/'

const Auth = ({children}: any) => {
    const dispatch = useDispatch()
    const selector = useSelector((state: State) => state);
    const isSignedIn = getIsSignedIn(selector)

    useEffect(() => {
        if(!isSignedIn) {
            dispatch(listenAuthState())
        }
    });
    if(!isSignedIn) {
        return <Login/>
    } 
    return children;
    
}
export default Auth;
