import {combineReducers} from 'redux';
import {routerReducer, RouterState} from 'react-router-redux';

export interface IState {
    router: RouterState;
}

export default combineReducers({
    router: routerReducer
});
