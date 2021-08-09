import initialState from '../store/initialState';
import * as Actions from './actions';
import { MemoList, MemoAction } from './types';

export const MemoReducer = (
  state: MemoList = initialState.memos,
  action: MemoAction
) => {
  switch (action.type) {
    case Actions.READ_MEMO:
      return {
        ...state,
        ...action.payload,
      }
    case Actions.DELETE_MEMO:
      return {
        ...state,
        ...action.payload
      }
    case Actions.SWITCH_FAVORITE:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
};
