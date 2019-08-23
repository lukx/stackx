import {combineReducers, Reducer} from 'redux';
import {connectRouter, RouterState} from 'connected-react-router';

export interface State {
    router?: RouterState;
}

export function createRootReducer(history): Reducer<State> {
    return combineReducers({
        router: connectRouter(history)
    });
}
