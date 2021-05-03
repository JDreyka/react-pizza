import BasketTable from './BasketTable.jsx';
import {Button, Grid, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';

export default function ShoppingBasket(props) {
    return (
      <>
          <BasketTable items={props.items}/>
          <Typography paragraph align='right' variant='h6'>
              {`Итоговая стоимость: ${props.totalCost}р`}
          </Typography>
          <BasketActions/>
      </>
    );
}

function BasketActions() {
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
                  <Button variant='contained' color='primary' disabled>Оформить заказ</Button>
              </Grid>
          </Grid>
      </div>
    );
}