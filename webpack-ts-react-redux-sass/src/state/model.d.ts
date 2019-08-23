import {Action} from "redux";

export interface AppAction<T, P> extends Action {
    type: T;
    payload: P;
}

export interface IdIndexedMap<T> {
    [id: string]: T;
}