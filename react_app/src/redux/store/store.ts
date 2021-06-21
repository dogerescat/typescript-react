import { createStore as reduxCreateStore, combineReducers, applyMiddleware} from 'redux';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import { UsersReducer } from '../users/reducer';
import thunk from 'redux-thunk';

const createStore = (history: any) => {
    return reduxCreateStore(
        combineReducers({
            router: connectRouter(history),
            users: UsersReducer,
        }),
        applyMiddleware(
            routerMiddleware(history),
            thunk
        )
    )
}

export default createStore;