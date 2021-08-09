import { MemoState } from './types';

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

export const SWITCH_FAVORITE = 'SWITCH_FAVORITE';
export const switchFavorite = (memoList: MemoState[]) => {
  return {
    type: 'SWITCH_FAVORITE',
    payload: {
      memoList: memoList
    }
  }
}

export const DELETE_MEMO = 'DELETE_MEMO';
export const deleteMemo = (memoList: MemoState[]) => {
  return {
    type: 'DELETE_MEMO',
    payload: {
      memoList: memoList
    }
  }
}

export const DELETE_MEMOS = 'DELETE_MEMOS';
export const deleteMemos = () => {
  return {
    type: 'DELETE_MEMO',
    payload: {
      memoList: []
    }
  }
}

