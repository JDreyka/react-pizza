import ShoppingBasket from './ShoppingBasket.jsx';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        items: state.basketBox.shoppingBasket.items,
        totalCost: state.basketBox.shoppingBasket.totalCost,
    };
};
const mapDispatchToProps = () => {
};

export const BasketContainer = connect(mapStateToProps, mapDispatchToProps)(ShoppingBasket);