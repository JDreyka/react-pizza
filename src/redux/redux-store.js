import {combineReducers, createStore} from 'redux';
import basketReducer from './basketReducer.js';

let reducers = combineReducers({
    basket: basketReducer,
});

export let store = createStore(reducers);