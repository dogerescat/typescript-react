import initialState from '../store/initialState';
import * as Actions from './action';
import { UserAction } from '../../types/redux/user';

export const UsersReducer = (
  state = initialState.users,
  action: UserAction
) => {
  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
