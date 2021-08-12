import { db, storage, FirebaseTimestamp} from '../../firebase';
import { push } from 'connected-react-router';
import { MemoState } from './types';
import { FirebaseTs, FirebaseRf, FirebaseQs, FirebaseQds} from '../../firebase/types';
import { readMemo, deleteMemo, switchFavorite } from './actions';
import { Dispatch } from 'redux';
import { State } from '../users/types';
const memoRef: FirebaseRf = db.collection('memos');

interface Data {
  title: string;
  content: string;
  updatedAt: FirebaseTs;
  uid?: string;
  userId: string; 
  createdAt?: FirebaseTs;
  isFavorite?: boolean;
  imageId?: string;
}

export const saveMemo = (memo: string, title: string, id: string, imageId: string) => {
  return async (dispatch: Dispatch, getState: () => State) => {
    const state = getState();
    const userId: string = state.users.uid
    const timestamp = FirebaseTimestamp.now();
    const data: Data = {
      title: title,
      content: memo,
      updatedAt: timestamp,
      userId: userId,
      imageId: imageId
    };
    if(id === '') {
      const ref = memoRef.doc();
      id = ref.id;
      data.uid = id;
      data.createdAt = timestamp;
      data.isFavorite = false;
    }
    return memoRef
      .doc(id)
      .set(data, {merge: true})
      .then(() => {
        dispatch(push('/folder'));
      })
      .catch((error) => {
        throw new Error(error);
      });
  };
};

export const deleteData = (uid: string, index: number) => {
  return async (dispatch: Dispatch, getState: () => State) => {
    const state = getState();
    const userId = state.users.uid;
    const imageId = state.memos.memoList[index].imageId
    const memoList = state.memos.memoList;
    memoList.splice(index, 1);
    memoRef.doc(uid).delete()
    .then(() => {
      if(imageId) {
        storage.ref('images/'+userId).child(imageId).delete();
        dispatch(deleteMemo(memoList))
      }
    })
    .catch((error) => {
      throw new Error(error);
    })
  }
}

export const switchMemoFavorite = (uid: string, index: number) => {
  return async (dispatch: Dispatch, getState: () => State) => {
    const state = getState();
    const memoList = state.memos.memoList;
    memoList[index].isFavorite = !memoList[index].isFavorite;
    memoRef.doc(uid).set({isFavorite: memoList[index].isFavorite}, {merge: true})
      .then(() => {
        dispatch(switchFavorite(memoList));
      })
      .catch((error) => {
        throw new Error(error);
      })
  }
}

export const readData = () => {
  return async (dispatch: Dispatch, getState: () => State) => {
    const state = getState();
    const userId = state.users.uid;
    const memoList: MemoState[] = [];
    memoRef.where('userId', '==', userId).get()
      .then((snapshot: FirebaseQs) => {
        snapshot.forEach((doc: FirebaseQds) => {
          const data = doc.data();
          const memo: MemoState = {
            title: data.title,
            content: data.content,
            uid: data.uid,
            userId: data.userId,
            isFavorite: data.isFavorite,
            imageId: data.imageId
          };
          memoList.push(memo);
          dispatch(readMemo(memoList));
        })
      })
    
  }
}
