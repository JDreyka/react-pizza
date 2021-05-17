import {Grid} from '@material-ui/core';
import CatalogItem from './CatalogItem.jsx';

const Catalog = props => {
    const addToBasket = itemId => {
        props.addToBasketAC(itemId);
    };

    const removeFromBasket = (itemId, cost, count) => {
        props.removeFromBasketAC(itemId, cost, count);
    };

    const getItemInfo = itemId => {
        const itemInCatalog = props.catalogItems.find(i => i.id === itemId);
        const itemInBasket = props.basketItems.find(i => i.id === itemId);

        return {
            title: itemInCatalog.title,
            description: itemInCatalog.description,
            image: itemInCatalog.image,
            count: itemInBasket ? itemInBasket.count : 0,
        };
    };

    return (
      <div>
          <Grid container spacing={5}>
              {props.catalogItems.map(i =>
                <Grid item xs={3}>
                    <CatalogItem
                      {...getItemInfo(i.id)}
                      onAdd={() => addToBasket(i.id)}
                      onRemove={() => removeFromBasket(i.id, i.cost, i.count)}
                    />
                </Grid>
              )}
          </Grid>
      </div>
    );
};

export default Catalog;