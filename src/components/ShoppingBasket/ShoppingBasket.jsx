import BasketTable from './BasketTable.jsx';
import {Button, Grid, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';

export default function ShoppingBasket(props) {
    const arrangeInBasket = () => {
        props.arrangeInBasketAC();
    };

    return (
      <>
          <BasketTable items={props.items}/>
          <Typography paragraph align='right' variant='h6'>
              {`Итоговая стоимость: ${props.totalCost}р`}
          </Typography>
          <BasketActions {...props} onArrange={() => arrangeInBasket()}/>
      </>
    );
}

function BasketActions(props) {
    const disabled = props.items.length === 0;

    return (
      <div className='basketActions'>
          <Grid
            container
            justify='space-between'
            alignItems='center'
          >
              <Grid item>
                  <Link to='/catalog'>
                      <Button variant='contained' color='primary'>Вернуться к выбору</Button>
                  </Link>
              </Grid>
              <Grid item>
                  <Button variant='contained' color='primary' id='placeAnOrder' onClick={props.onArrange}
                          disabled={disabled}>Оформить
                      заказ</Button>
              </Grid>
          </Grid>
      </div>
    );
}