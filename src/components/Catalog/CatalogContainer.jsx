import Catalog from './Сatalog.jsx';
import {connect} from 'react-redux';
import {addToBasketAC, removeFromBasketAC} from '../../redux/actions.js';

const mapStateToProps = state => {
    return {
        catalogItems: state.basket.catalog.items,
        basketItems: state.basket.shoppingBasket.items,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        addToBasketAC: itemId => {
            dispatch(addToBasketAC(itemId));
        },
        removeFromBasketAC: itemId => {
            dispatch(removeFromBasketAC(itemId));
        },
    };
};

export const CatalogContainer = connect(mapStateToProps, mapDispatchToProps)(Catalog);