import React from 'react';
import Catalog from './Сatalog.jsx';
import {connect} from 'react-redux';
import {addToBasketAC, removeFromBasketAC} from '../../redux/actions.js';

const mapStateToProps = state => {
    return {
        itemsCatalog: state.catalogAndBasket.catalog.items,
        itemsBasket: state.catalogAndBasket.shoppingBasket.items,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        addToBasketAC: (itemId, title, cost, count) => {
            dispatch(addToBasketAC(itemId, title, cost, count));
        },
        removeFromBasketAC: (itemId, cost, count) => {
            dispatch(removeFromBasketAC(itemId, cost, count));
        },
    };
};

const CatalogContainer = connect(mapStateToProps, mapDispatchToProps)(Catalog);
export default CatalogContainer;