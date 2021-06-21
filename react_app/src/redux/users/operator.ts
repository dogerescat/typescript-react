import axios from "axios";
import { signInAction } from "./action";
import { push } from "connected-react-router";

export const signIn = () => {
    return async (dispatch: any, getState: any) => {
        const state = getState();
        const isSignedIn = state.users.isSignedIn;
        if(!isSignedIn) {
            const url = 'https://api.github.com/users/oniwa-shuto';
            const res = await axios.get(url);
            console.log(res.data);
            const username = res.data.login;
            dispatch(signInAction({
               name: username ,
               isSignedIn: true,
               id: 1
            }))
            dispatch(push('/home'));
        }
    }
}