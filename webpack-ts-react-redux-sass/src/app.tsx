import React from 'react';
import {render} from 'react-dom';
import configureStore, {browserHistory} from './store/configureStore';
import {Provider} from 'react-redux';
import AppFrame from './module/frame';
import './scss/main.scss';
import {State} from 'src/state/rootReducer';
import {ConnectedRouter} from 'connected-react-router';

const initialState: State = {};

const store = configureStore(initialState);

render(
    <Provider store={store}>
        <ConnectedRouter history={browserHistory}>
            <AppFrame/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
