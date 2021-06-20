// import React from 'react';
import './App.css';
import './styles/form.css';
import './styles/header.css';
import FormHeader from './components/Header';
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
