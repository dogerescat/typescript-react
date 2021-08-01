import React from 'react';
import './styles/header.css';
import './styles/form.css';
import './styles/button.css';
import './styles/index.css';
import './styles/create.css';
import FormHeader from './templates/Header';
import Router from './Router';
import { BottomNavi } from './components/Ukit';
import {useSelector} from 'react-redux';
import {State} from './redux/users/types';
import {getIsSignedIn, getBottomNavi} from './redux/users/selectors';

function App() {
  const selector = useSelector((state: State) => state);
  const isSignedIn = getIsSignedIn(selector);
  const bottomNavi = getBottomNavi(selector);
  let Bottom: any;
  if(isSignedIn) {
    Bottom = <BottomNavi value={bottomNavi} />;
  } 
  return (
    <>
      <FormHeader />
      <div className='App'>
        <Router />
      </div>
      <div className='bottom-navi'>
        {Bottom}
      </div>
    </>
  );
}

export default App;
