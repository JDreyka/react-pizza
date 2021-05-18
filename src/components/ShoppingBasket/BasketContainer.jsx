import ShoppingBasket from './ShoppingBasket.jsx';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        items: state.basket.shoppingBasket.items,
        totalCost: state.basket.shoppingBasket.totalCost,
    };
};
const mapDispatchToProps = () => {
};

export const BasketContainer = connect(mapStateToProps, mapDispatchToProps)(ShoppingBasket);