import {combineReducers, createStore} from 'redux';
import basketReducer from './basketReducer.js';

let reducers = combineReducers({
    basketBox: basketReducer,
});

export let store = createStore(reducers);