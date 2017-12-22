import {
    Store,
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import {IState, default as rootReducer} from 'src/reducers';

export const browserHistory = createHistory();

export default function configureReduxStore(initialState: IState): Store<IState> {
    let enhancer: any;

    let composeEnhancers;

    if (process.env.NODE_ENV === 'development') {
        composeEnhancers = (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    } else {
        composeEnhancers = compose;
    }

    let router = routerMiddleware(browserHistory);

    enhancer = composeEnhancers(
        applyMiddleware(router, thunk)
    );

    return <Store<IState>>createStore(rootReducer, initialState, enhancer);
}
