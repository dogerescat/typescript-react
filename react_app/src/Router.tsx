import {Route, Switch} from 'react-router';
import Login from './components/Login'
import Register from './components/Register';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Register}/>
            <Route exact path="/login" component={Login}/>
        </Switch>
    )
}
export default Router;