import { signInAction, signOutAction } from "./action";
import { Dispatch } from "redux";
import { push } from "connected-react-router";
import { auth, FirebaseTimestamp, db } from "../../firebase";
import { deleteMemos } from '../memos/actions';
export const listenAuthState = () => {
    return async (dispatch: Dispatch) => {
        return auth.onAuthStateChanged(user => {
            if(!user) {
                dispatch(push('/login'));
                return;
            }
            const uid = user.uid;
            let value = window.location.pathname.split('/')[1];
            if(!value) {
                value = 'folder';
            }
            db.collection('users').doc(uid).get()
                .then((snapshot) => {
                    const data = snapshot.data();
                    dispatch(signInAction({
                        isSignedIn: true,
                        name: data?.username,
                        uid: uid,
                    }));
                });
        })
    }
}

export const signIn = (email: string, password: string) => {
    return async (dispatch: Dispatch) => {
            if(email === "" || password === "") {
                alert("必須入力です");
                return false;
            }
        
        auth.signInWithEmailAndPassword(email, password)
        .then((result) => {
            const user = result.user;
            if(user) {
                const uid = user.uid;
                db.collection('users').doc(uid).get()
                .then((snapshot) => {
                    const data = snapshot.data();
                    dispatch(signInAction({
                        isSignedIn: true,
                        name: data?.username,
                        uid: uid,
                    }))
                })
                dispatch(push('/folder'));
            }
        })
    }
}

export const signUp = (email: string, password: string, username: string, confirm: string) => {
    return async (dispatch: Dispatch) => {
        if(username === "" || email === "" || password === "" || confirm === "") {
            alert('必須入力です');
            return false;
        }
        if(password !== confirm) {
            alert("パスワードが一致しません");
            return false;
        }
        return auth.createUserWithEmailAndPassword(email, password)
            .then((result) => {
                const user = result.user;
                if(user) {
                    const uid = user.uid;
                    const timestamp = FirebaseTimestamp.now();
                    const userInitialData = {
                        createAt: timestamp,
                        email: email,
                        updatedAt: timestamp,
                        username: username
                    }
                    db.collection('users').doc(uid).set(userInitialData)
                    .then(() => {
                        dispatch(push('/folder'))
                    })
                }
            })
    }
}

export const signOut = () => {
    return async (dispatch: Dispatch) => {
        auth.signOut()
          .then(() => {
              dispatch(signOutAction());
              dispatch(deleteMemos());
              dispatch(push('/'));
          })
    }
}