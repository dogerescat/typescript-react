import React from 'react';
import {Route, Switch} from 'react-router';
import { SignUp, Login, Home } from './templates'
import Auth from './Auth';

const Router: React.FC = () => {
    return (
        <Switch>
            <Route exact path="(/)?" component={SignUp}/>
            <Route exact path="/login" component={Login}/>
            <Auth>
                <Route exact path="/home" component={Home}/>
            </Auth>
        </Switch>
    );
}
export default Router;