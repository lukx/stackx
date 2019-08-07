import {combineReducers} from 'redux';
import {connectRouter, RouterState} from 'connected-react-router'

export interface IState {
    router: RouterState
}

export function createRootReducer(history) {
    return combineReducers({
        router: connectRouter(history)
    });
}
