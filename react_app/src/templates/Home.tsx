import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserId, getUserName } from '../redux/users/selectors';
import { State } from '../types/redux/user';
import { signOut } from '../redux/users/operator';
import { PrimaryButton } from '../components/Ukit';

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state: State) => state);
  const userId = getUserId(selector);
  const userName = getUserName(selector);
  return (
    <>
      <h2>Home</h2>
      <p>{userId}</p>
      <p>{userName}</p>
      <PrimaryButton label={"sign out"} onClick={() => dispatch(signOut())} />
    </>
  );
};
export default Home;
