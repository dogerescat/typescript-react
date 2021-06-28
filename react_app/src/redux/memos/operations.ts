import { db, FirebaseTimestamp, FirebaseTs } from '../../firebase';
import { push } from 'connected-react-router';
const memoRef = db.collection('memos');

interface Data {
  title: string;
  content: string;
  updatedAt: FirebaseTs;
  id?: string;
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
    const id = ref.id;
    data.id = id;
    data.createdAt = timestamp;
    return memoRef
      .doc(id)
      .set(data)
      .then(() => {
        dispatch(push('/home'));
      })
      .catch((error) => {
        throw new Error(error);
      });
  };
};
