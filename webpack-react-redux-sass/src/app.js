import 'core-js/shim';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux'
import Frame from './components/frame';
import './scss/main.scss';

const store = configureStore();

render(
    <Provider store={store}>
        <Frame/>
    </Provider>,
    document.getElementById('root')
);
