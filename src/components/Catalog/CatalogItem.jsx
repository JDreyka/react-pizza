import {Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography} from '@material-ui/core';
import {AddCircle, RemoveCircle} from '@material-ui/icons';

export default function CatalogItem({title, description, image, count, onAdd, onRemove}) {
    return (
      <Card className='catalogItem' elevation={5}>
          <CardMedia
            className='image'
            component='img'
            image={image}
          />
          <CardContent className='content'>
              <Typography className='title' variant='h5'>
                  {title}
              </Typography>
              <Typography variant='body2' color='textSecondary'>
                  {description}
              </Typography>
          </CardContent>
          <CardActions>
              <Grid
                container
                justify='center'
                alignItems='center'
                spacing={3}
              >
                  <Grid item>
                      <IconButton onClick={onRemove}>
                          <RemoveCircle fontSize='large' color='secondary'/>
                      </IconButton>
                  </Grid>
                  <Grid item>
                      <Typography align='center' variant='h6'>
                          {count}
                      </Typography>
                  </Grid>
                  <Grid item>
                      <IconButton onClick={onAdd}>
                          <AddCircle fontSize='large' color='secondary'/>
                      </IconButton>
                  </Grid>
              </Grid>
          </CardActions>
      </Card>
    );
}