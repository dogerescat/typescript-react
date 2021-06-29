import { createStore as reduxCreateStore, combineReducers, applyMiddleware} from 'redux';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import { UsersReducer } from '../users/reducer';
import { MemoReducer } from '../memos/reducer';
import thunk from 'redux-thunk';

const createStore = (history: any) => {
    return reduxCreateStore(
        combineReducers({
            router: connectRouter(history),
            users: UsersReducer,
            memos: MemoReducer
        }),
        applyMiddleware(
            routerMiddleware(history),
            thunk
        )
    )
}

export default createStore;