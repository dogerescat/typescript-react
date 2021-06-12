import React from 'react';
import FormHeader from './Header';
import Login from './Login';
import Register from './Register';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function Main() {
  return (
    <BrowserRouter>
      <FormHeader />
      <Switch>
        <Route path="/" exact children={<Register />} />
        <Route path="/login" children={<Login />} />
      </Switch>
    </BrowserRouter>
  );
}
export default Main;
