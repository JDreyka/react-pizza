import {AppBar, Button, makeStyles, Toolbar, Typography} from "@material-ui/core";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    button: {
        marginRight: theme.spacing(4),
    },
    title: {
        marginLeft: theme.spacing(4),
        flexGrow: 1,
    },
}));

export default function Header() {
    const classes = useStyles();
    return (
        <AppBar className='header' position='static'>
            <Toolbar>
                <Typography variant='h6' className={classes.title}>
                    Anastasia's pizza
                </Typography>
                <Link to='/basket'>
                    <Button
                        variant='contained'
                        color='secondary'
                        className={classes.button}
                        startIcon={<ShoppingBasketIcon/>}
                    >
                        Корзина
                    </Button>
                </Link>
            </Toolbar>
        </AppBar>
    )
}