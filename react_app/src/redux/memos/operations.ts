import { db, FirebaseTimestamp, FirebaseTs } from '../../firebase';
import { push } from 'connected-react-router';
import { MemoState } from '../../types/redux/memo';
import { readMemo } from './actions';
const memoRef = db.collection('memos');

interface Data {
  title: string;
  content: string;
  updatedAt: FirebaseTs;
  uid?: string;
  userId: string; 
  createdAt?: FirebaseTs;
}
export const saveMemo = (memo: string, title: string) => {
  return async (dispatch: any, getState: any) => {
    const state = getState();
    const userId: string = state.users.uid
    const timestamp = FirebaseTimestamp.now();
    const data: Data = {
      title: title,
      content: memo,
      updatedAt: timestamp,
      userId: userId
    };
    const ref = memoRef.doc();
    const uid = ref.id;
    data.uid = uid;
    data.createdAt = timestamp;
    return memoRef
      .doc(uid)
      .set(data)
      .then(() => {
        dispatch(readData());
        dispatch(push('/home'));
      })
      .catch((error) => {
        throw new Error(error);
      });
  };
};

export const readData = () => {
  return async (dispatch: any, getState: any) => {
    const state = getState();
    const userId = state.users.uid;
    const memoList: MemoState[] = [];
    memoRef.where('userId', '==', userId).get()
      .then((snapshot) => {
        snapshot.forEach((doc: any) => {
          const data = doc.data();
          const memo: MemoState = {
            title: data.title,
            content: data.content,
            uid: data.uid,
            userId: data.userId
          };
          memoList.push(memo);
          dispatch(readMemo(memoList));
        })
      })
    
  }
}