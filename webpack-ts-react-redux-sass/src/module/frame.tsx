import React from 'react';
const LogoImg = require('../images/frog.png');
import {APP_TITLE, APP_ENDPOINT} from 'appConfig';

export default function render(): JSX.Element {
    console.log(APP_TITLE, APP_ENDPOINT);
    return <div>I am the app.<img alt="" src={LogoImg}/></div>;
}