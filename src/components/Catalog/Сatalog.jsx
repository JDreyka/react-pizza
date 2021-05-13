import React from 'react';
import {Grid} from '@material-ui/core';
import CatalogItem from './CatalogItem.jsx';
import * as axios from 'axios';

const Catalog = props => {
    if (props.itemsCatalog.length === 0) {
        axios.get(
          'http://10.8.0.3/api/v1/Catalog/items?take=20' // Home
          /*'http://dev.react-pizza.com/api/v1/Catalog/items'*/ // Andrey
        ).then(response => {
            props.setCatalog(response.data);
        });
    }
    const addToBasket = (itemId, title, cost, count) => {
        props.addToBasketAC(itemId, title, cost, count);
    };
    const removeFromBasket = (itemId, cost, count) => {
        props.removeFromBasketAC(itemId, cost, count);
    };

    const getItemInfo = itemId => {
        const itemInCatalog = props.itemsCatalog.find(i => i.id === itemId);
        const itemInBasket = props.itemsBasket.find(i => i.id === itemId);

        return {
            title: itemInCatalog.title,
            description: itemInCatalog.description,
            cost: itemInCatalog.cost,
            image: itemInCatalog.imageUrl,
            count: itemInBasket ? itemInBasket.count : 0,
        };
    };

    return (
      <div>
          <Grid container spacing={5}>
              {props.itemsCatalog.map(i =>
                <Grid item xs={3}>
                    <CatalogItem {...getItemInfo(i.id)}
                                 onAdd={() => addToBasket(i.id, i.title, i.cost, i.count)}
                                 onRemove={() => removeFromBasket(i.id, i.cost, i.count)}
                    />
                </Grid>
              )}
          </Grid>
      </div>
    );
};

export default Catalog;