import catalogAndBasketReducer from './catalogAndBasketReducer.js';

let store = {
    _callSubscriber() {
    },

    _state: {},

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.catalogAndBasket = catalogAndBasketReducer(this._state.catalogAndBasket, action);

        this._callSubscriber(this._state);
    },
};

export default store;