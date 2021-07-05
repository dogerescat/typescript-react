import React from 'react';
import {Route, Switch} from 'react-router';
import { SignUp, Login, Home, Create, Open } from './templates'

import Auth from './Auth';

const Router: React.FC = () => {
    return (
        <Switch>
            <Route exact path="(/)?" component={SignUp}/>
            <Route exact path="/login" component={Login}/>
            <Auth>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/create" component={Create}/>
                <Route exact path="/open/:id" component={Open}/>
            </Auth>
        </Switch>
    );
}
export default Router;