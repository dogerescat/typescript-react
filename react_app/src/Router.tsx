import React from 'react';
import {Route, Switch} from 'react-router';
import Login from './components/Login'
import Register from './components/Register';
import Home from './components/Home';

const Router = () => {
    return (
        <Switch>
            <Route exact path="(/)?" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/home" component={Home}/>
        </Switch>
    );
}
export default Router;