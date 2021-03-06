import React from 'react';
import {Route, Switch} from 'react-router';
import { SignUp, Login, Home, Create, Edit, Favorite } from './templates'

import Auth from './Auth';

const Router: React.FC = () => {
    return (
        <Switch>
            <Route exact path="(/)?" component={SignUp}/>
            <Route exact path="/login" component={Login}/>
            <Auth>
                <Route exact path="/folder" component={Home}/>
                <Route exact path="/create" component={Create}/>
                <Route exact path="/favorite" component={Favorite} />
                <Route exact path="/edit/:id" component={Edit} />
            </Auth>
        </Switch>
    );
}
export default Router;