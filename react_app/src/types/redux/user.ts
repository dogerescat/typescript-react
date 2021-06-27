export interface State {
    users: UserState;
}

export interface UserState {
    uid : string;
    name: string;
    isSignedIn: boolean;
}
export interface UserAction {
    type: string;
    payload: {
        isSignedIn: boolean;
        uid: string;
        name: string;
        email: string;
    }
}
export interface UserSignUp {
    name: string;
    email: string;
    password: string;
}
