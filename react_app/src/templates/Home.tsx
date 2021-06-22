import React from 'react';
import { useSelector } from 'react-redux';
import { getUserId, getUserName } from '../redux/users/selectors';
import { State } from '../types/redux/user';

const Home = () => {
  const selector = useSelector((state: State) => state);
  const userId = getUserId(selector);
  const userName = getUserName(selector);
  return (
    <>
      <h2>Home</h2>
      <p>{userId}</p>
      <p>{userName}</p>
    </>
  );
};
export default Home;
