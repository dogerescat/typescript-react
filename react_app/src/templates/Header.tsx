import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../redux/users/types';
import { getIsSignedIn } from '../redux/users/selectors';
import { DrawerMenu } from '../components/Ukit'

const FormHeader = () => {
  const selector = useSelector((state: State) => state);
  const isSignedIn = getIsSignedIn(selector);
  let Button: any;
  if(isSignedIn) {
    Button = <DrawerMenu/>;
  } 
  return (
    <header className='header'>
      <div className='header_wrapper'>
        <div className='title'>Memo Box </div>
      </div>
        {Button}
    </header>
  );
};

export default FormHeader;
