import {combineReducers, createStore} from 'redux';
import catalogAndBasketReducer from './catalogAndBasketReducer.js';

let reducers = combineReducers({
    catalogAndBasket: catalogAndBasketReducer,
});

let store = createStore(reducers);
export default store;