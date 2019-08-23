import {
    Store,
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import {createBrowserHistory} from 'history';
import thunk from 'redux-thunk';

import {State, createRootReducer} from 'src/state/rootReducer';

export const browserHistory = createBrowserHistory();

export default function configureReduxStore(initialState: State): Store<State> {
    let enhancer;

    let composeEnhancers;

    if (process.env.NODE_ENV === 'development') {
        composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    } else {
        composeEnhancers = compose;
    }

    enhancer = composeEnhancers(
        applyMiddleware(thunk)
    );

    return createStore(createRootReducer(browserHistory), initialState, enhancer) as Store<State>;
}
