import {UserState} from '../../../types/redux/user'

export const SIGN_IN = 'SIGN_IN';

export const signInAction = (userState: UserState) => {
    return {
        type: 'SIGN_IN',
        payload: {
            isSignedIn: false,
            id: userState.id,
            name: userState.name
        }
    }
}