import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';

export default function BasketTable(props) {
    return (
      <TableContainer className='basketTable' component={Paper}>
          <Table size='small' aria-label='a dense table'>
              <TableHead>
                  <TableRow>
                      <TableCell>Наименование товара</TableCell>
                      <TableCell align='right'>Кол-во&nbsp;(шт)</TableCell>
                      <TableCell align='right'>Цена&nbsp;₽</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  {props.items.map(item => (
                    <ShoppingBasketRow {...item}/>
                  ))}
              </TableBody>
          </Table>
      </TableContainer>
    );
}

function ShoppingBasketRow({id, title, cost, count}) {
    return (
      <TableRow className='basketTableRow' key={id}>
          <TableCell component='th' scope='row'>
              {title}
          </TableCell>
          <TableCell align='right'>{count}</TableCell>
          <TableCell align='right'>{cost}</TableCell>
      </TableRow>
    );
}