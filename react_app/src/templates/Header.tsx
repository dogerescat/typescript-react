import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../types/redux/user';
import { getIsSignedIn } from '../redux/users/selectors';
import { Dropdown } from '../components/Ukit'

const FormHeader = () => {
  // const dispatch = useDispatch();
  const selector = useSelector((state: State) => state);
  const isSignedIn = getIsSignedIn(selector);
  let Button: any;
  if(isSignedIn) {
    Button = <Dropdown/>;
  } 
  return (
    <header className='header'>
      <div className='header_wrapper'>
        <div className='title'>React App</div>
        {Button}
      </div>
    </header>
  );
};

export default FormHeader;
