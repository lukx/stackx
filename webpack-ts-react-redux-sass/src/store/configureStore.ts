import {
    Store,
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import {createBrowserHistory} from 'history';

import {IState, createRootReducer} from 'src/reducers';

export const browserHistory = createBrowserHistory();

export default function configureReduxStore(initialState: IState): Store<IState> {
    let enhancer: any;

    let composeEnhancers;

    if (process.env.NODE_ENV === 'development') {
        composeEnhancers = (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    } else {
        composeEnhancers = compose;
    }


    return <Store<IState>>createStore(createRootReducer(browserHistory), initialState, enhancer);
}
