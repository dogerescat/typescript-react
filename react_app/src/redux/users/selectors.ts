import { createSelector } from 'reselect';
import { State, UserState } from './types';

const userSelector = (state: State) => state.users;

export const getUserId = createSelector(
  [userSelector],
  (state: UserState) => state.uid
);

export const getUserName = createSelector(
  [userSelector],
  (state: UserState) => state.name
);

export const getIsSignedIn = createSelector(
  [userSelector],
  (state: UserState) => state.isSignedIn
);

