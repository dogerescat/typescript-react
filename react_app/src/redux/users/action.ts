import {UserState} from '../../types/redux/user'

export const SIGN_IN = 'SIGN_IN';

export const signInAction = (userState: UserState) => {
    return {
        type: 'SIGN_IN',
        payload: {
            isSignedIn: true,
            id: userState.id,
            name: userState.name
        }
    }
}

export const SIGN_UP = 'SIGN_UP';
export const signUpAction = (userState: UserState) => {
    return {
        type: 'SIGN_UP',
        payload: {
            isSignedIn: false,
            id: userState.id,
            name: userState.name
        }
    }
}
export const SIGN_OUT = 'SIGN_OUT';
export const signOutAction = (userState: UserState) => {
    return {
        type: 'SIGN_OUT',
        payload: {
            isSignedIn: false,
            id: userState.id,
            name: userState.name
        }
    }
}
