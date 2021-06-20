export interface UserState {
    name: string;
    id : number;
    
}
export interface UserAction {
    type: string;
    payload: {
        isSignedIn: boolean;
        id: number;
        name: string;
        email: string;
    }
}
export interface UserSignUp {
    name: string;
    email: string;
    password: string;
}
