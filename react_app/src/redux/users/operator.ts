import { signInAction } from "./action";
import { push } from "connected-react-router";
import { auth, FirebaseTimestamp, db } from "../../firebase";

export const signIn = (email: string, password: string) => {
    return async (dispatch: any) => {
            if(email === "" || password === "") {
                alert("必須入力です");
                return false;
            }
            dispatch(push('/home'));
        
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
                        uid: uid
                    }))
                })
            }
        })
    }
}

export const signUp = (name: string, email: string, password: string, confirm: string) => {
    return async (dispatch: any) => {
        //validation
        if(name === "" || email === "" || password === "" || confirm === "") {
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
                        username: name
                    }
                    db.collection('users').doc(uid).set(userInitialData)
                    .then(() => {
                        dispatch(push('/home'))
                    })
                }
            })
    }
}