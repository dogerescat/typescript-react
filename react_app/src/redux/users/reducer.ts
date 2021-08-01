import initialState from '../store/initialState';
import * as Actions from './action';
import { UserAction, UserState } from './types';

export const UsersReducer = (
  state: UserState = initialState.users,
  action: UserAction
) => {
  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        ...state,
        ...action.payload,
      };
    case Actions.SIGN_OUT:
      return {
        ...action.payload
      }
    default:
      return state;
  }
};
