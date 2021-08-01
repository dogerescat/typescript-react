import { MemoList } from "../memos/types";

export interface State {
  users: UserState;
  memos: MemoList;
}

export interface UserState {
  uid: string;
  name: string;
  isSignedIn: boolean;
  bottomNavi: string;
}
export interface UserAction {
  type: string;
  payload: {
    isSignedIn: boolean;
    uid: string;
    name: string;
    email: string;
  };
}
export interface UserSignUp {
  name: string;
  email: string;
  password: string;
}
