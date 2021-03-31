import {Grid} from "@material-ui/core";
import CatalogItem from "./CatalogItem";

import {state} from "../../state";


export default function Catalog() {

    const addToBasket = (itemId) => {
        alert(`add item with id: ${itemId} to the basket`)
    }

    const removeFromBasket = (itemId) => {
        alert(`remove item with id: ${itemId} from the basket`)
    }

    const getItemInfo = (itemId) => {

        const itemInCatalog = state.catalog.items
            .find(item => item.id === itemId);
        const itemInBasket = state.shoppingBasket.items
            .find(item => item.id === itemId);

        return {
            title: itemInCatalog.title,
            description: itemInCatalog.description,
            image: itemInCatalog.image,
            count: itemInBasket ? itemInBasket.count : 0,
        }
    }

    return (
        <div>
            <Grid container spacing={5}>
                {state.catalog.items.map((item) =>
                    <Grid item xs={3}>
                        <CatalogItem
                            {...getItemInfo(item.id)}
                            onAdd={() => addToBasket(item.id)}
                            onRemove={() => removeFromBasket(item.id)}
                        />
                    </Grid>
                )}
            </Grid>
        </div>
    )
}