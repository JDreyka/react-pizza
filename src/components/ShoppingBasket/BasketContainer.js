import React from 'react';
import ShoppingBasket from './ShoppingBasket.jsx';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        items: state.catalogAndBasket.shoppingBasket.items,
        totalCost: state.catalogAndBasket.shoppingBasket.totalCost,
    };
};
const mapDispatchToProps = () => {
};

const BasketContainer = connect(mapStateToProps, mapDispatchToProps)(ShoppingBasket);
export default BasketContainer;