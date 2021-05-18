import {ADD_TO_BASKET, REMOVE_FROM_BASKET} from './actions.js';
import {initialState} from './initialState.js';

const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_BASKET: {
            const stateCopy = JSON.parse(JSON.stringify(state));
            const itemFromBasket = stateCopy.shoppingBasket.items.find(i => i.id === action.id);
            if (itemFromBasket === undefined) {
                const itemFromCatalog = stateCopy.catalog.items.find(i => i.id === action.id);
                const newItemInBasket = {
                    id: itemFromCatalog.id,
                    title: itemFromCatalog.title,
                    cost: itemFromCatalog.cost,
                    count: +1,
                };
                stateCopy.shoppingBasket.items.push(newItemInBasket);
                stateCopy.shoppingBasket.totalCost += newItemInBasket.cost;
                return stateCopy;
            }
            itemFromBasket.count += 1;
            stateCopy.shoppingBasket.totalCost += itemFromBasket.cost;
            return stateCopy;
        }
        case REMOVE_FROM_BASKET: {
            const stateCopy = JSON.parse(JSON.stringify(state));
            const itemFromBasket = stateCopy.shoppingBasket.items.find(i => i.id === action.id);
            if (itemFromBasket !== undefined) {
                const itemFromCatalog = stateCopy.catalog.items.find(i => i.id === action.id);
                itemFromBasket.count -= 1;
                stateCopy.shoppingBasket.totalCost -= itemFromCatalog.cost;
                if (itemFromBasket.count === 0) {
                    stateCopy.shoppingBasket.items = stateCopy.shoppingBasket.items.filter(i => i.id !== action.id);
                }
            }
            return stateCopy;
        }
        default:
            return state;
    }
};

export default basketReducer;