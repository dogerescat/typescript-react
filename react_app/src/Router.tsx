import React from 'react';
import {Route, Switch} from 'react-router';
import Login from './templates/Login'
import Home from './templates/Home';
import SignUp from './templates/SignUp';

const Router = () => {
    return (
        <Switch>
            <Route exact path="(/)?" component={SignUp}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/home" component={Home}/>
        </Switch>
    );
}
export default Router;