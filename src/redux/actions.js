export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const ARRANGE_IN_BASKET = 'ARRANGE_IN_BASKET';
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';
export const SET_CATALOG = 'SET_CATALOG';

/*---*/

export const addToBasketAC = (itemId, title, cost, count) => ({
    type: ADD_TO_BASKET,
    id: itemId,
    title: title,
    cost: cost,
    count: count,
});
export const arrangeInBasketAC = () => ({
    type: ARRANGE_IN_BASKET,
});
export const removeFromBasketAC = (itemId, cost, count) => ({
    type: REMOVE_FROM_BASKET,
    id: itemId,
    cost: cost,
    count: count,
});
export const setCatalogAC = items => ({
    type: SET_CATALOG,
    items,
});