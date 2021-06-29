import initialState from '../store/initialState';
import * as Actions from './actions';
import { MemoList, MemoAction } from '../../types/redux/memo';

export const MemoReducer = (
  state: MemoList = initialState.memos,
  action: MemoAction
) => {
  switch (action.type) {
    case Actions.READ_MEMO:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
