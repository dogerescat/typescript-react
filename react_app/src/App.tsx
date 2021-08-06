import React from 'react';
import './styles/header.css';
import './styles/form.css';
import './styles/button.css';
import './styles/index.css';
import './styles/create.css';
import FormHeader from './templates/Header';
import Router from './Router';

function App() {
  return (
    <>
      <FormHeader />
      <div className='App'>
        <Router />
      </div>
    </>
  );
}

export default App;
