import {createSelector} from 'reselect';
import { State } from '../../types/redux/user';
import { MemoList } from '../../types/redux/memo';

const memoSelector = (state: State) => state.memos;

export const getMemoList = createSelector(
    [memoSelector],
    (state: MemoList) => state.memoList
  );
  