import { MemoState } from '../../types/redux/memo';

export const CREATE_MEMO = 'CREATE_MEMO';

export const createMemo = (memoState: MemoState) => {
  return {
    type: 'CREATE_MEMO',
    payload: {
      uid: memoState.uid,
      title: memoState.title,
      content: memoState.content,
    },
  };
};

export const READ_MEMO = 'READ_MEMO';
export const readMemo = (memoList: MemoState[]) => {
  return {
    type: 'READ_MEMO',
    payload: {
      memoList: memoList
    }
  }
}


