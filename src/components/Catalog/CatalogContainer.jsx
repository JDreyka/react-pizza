import Catalog from './Сatalog.jsx';
import {connect} from 'react-redux';
import {addToBasketAC, removeFromBasketAC} from '../../redux/actions.js';

const mapStateToProps = state => {
    return {
        catalogItems: state.basketBox.catalog.items,
        basketItems: state.basketBox.shoppingBasket.items,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        addToBasketAC: itemId => {
            dispatch(addToBasketAC(itemId));
        },
        removeFromBasketAC: (itemId, cost, count) => {
            dispatch(removeFromBasketAC(itemId, cost, count));
        },
    };
};

export const CatalogContainer = connect(mapStateToProps, mapDispatchToProps)(Catalog);