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
