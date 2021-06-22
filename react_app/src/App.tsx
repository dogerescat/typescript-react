import React from 'react';
import './styles/header.css';
import FormHeader from './templates/Header';
import Router from './Router';
function App() {
  return (
    <div className="App">
      <FormHeader/>
      <Router/>
    </div>
  );
}

export default App;
