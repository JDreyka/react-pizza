import { connect } from 'react-redux';
import Catalog from './Сatalog.jsx';
import { addToBasketAC, removeFromBasketAC, setCatalogAC } from '../../redux/actions.js';

const mapStateToProps = state => {
	return {
		itemsCatalog: state.catalogAndBasket.catalog.items,
		itemsBasket: state.catalogAndBasket.shoppingBasket.items,
	};
};
let mapDispatchToProps = dispatch => {
	return {
		addToBasketAC: (itemId, title, cost, count) => {
			dispatch(addToBasketAC(itemId, title, cost, count));
		},
		removeFromBasketAC: (itemId, cost, count) => {
			dispatch(removeFromBasketAC(itemId, cost, count));
		},
		setCatalog: items => {
			dispatch(setCatalogAC(items));
		},
	};
};

const CatalogContainer = connect(mapStateToProps, mapDispatchToProps)(Catalog);
export default CatalogContainer;