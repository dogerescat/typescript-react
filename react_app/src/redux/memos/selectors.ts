import {createSelector} from 'reselect';
import { State } from '../users/types';
import { MemoList } from './types';

const memoSelector = (state: State) => state.memos;

export const getMemoList = createSelector(
    [memoSelector],
    (state: MemoList) => state.memoList
  );
  