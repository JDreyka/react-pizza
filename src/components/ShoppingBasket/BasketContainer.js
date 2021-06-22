import React from 'react';
import {arrangeInBasketAC} from '../../redux/actions.js';
import ShoppingBasket from './ShoppingBasket.jsx';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        items: state.catalogAndBasket.shoppingBasket.items,
        totalCost: state.catalogAndBasket.shoppingBasket.totalCost,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        arrangeInBasketAC: () => {
            dispatch(arrangeInBasketAC());
        },
    };
};

const BasketContainer = connect(mapStateToProps, mapDispatchToProps)(ShoppingBasket);
export default BasketContainer;