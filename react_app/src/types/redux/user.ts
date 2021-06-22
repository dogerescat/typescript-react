export interface State {
    users: UserState;
}

export interface UserState {
    name: string;
    uid : string;
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
