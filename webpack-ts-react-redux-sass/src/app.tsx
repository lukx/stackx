import React from 'react';
import {render} from 'react-dom';
import configureStore, {browserHistory} from './store/configureStore';
import {Provider} from 'react-redux';
import AppFrame from './components/frame';
import './scss/main.scss';
import {IState} from 'src/reducers';
import {ConnectedRouter} from 'connected-react-router';

const initialState = {} as IState;

const store = configureStore(initialState);

render(
    <Provider store={store}>
        <ConnectedRouter history={browserHistory}>
            <AppFrame/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
