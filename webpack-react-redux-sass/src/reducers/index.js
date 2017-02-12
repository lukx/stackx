import {combineReducers} from 'redux';
import answers from './answers';
import viewstate from './viewstate';
import validator from './validator';

export default combineReducers({
    answers,
    viewstate,
    validator
});