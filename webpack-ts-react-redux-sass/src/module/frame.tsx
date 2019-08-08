import React from 'react';
const LogoImg = require('../images/frog.png');

export default function render(): JSX.Element {
    return <div>I am the app.<img alt="" src={LogoImg}/></div>;
}