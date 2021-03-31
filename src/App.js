import React from "react";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";

import {createMuiTheme} from "@material-ui/core";
import {purple} from "@material-ui/core/colors";
import {ThemeProvider} from '@material-ui/styles';

import Header from "./components/Header/Header";
import Catalog from "./components/Catalog/Сatalog";
import ShoppingBasket from "./components/ShoppingBasket/ShoppingBasket";


const theme = createMuiTheme({
    palette: {
        primary: {
            main: purple[500],
        },
    },
})

function App() {
    return (
        <div className='app'>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Header/>
                    <div className='section'>
                        <Switch>
                            <Route exact path='/catalog' component={Catalog}/>
                            <Route exact path='/basket' component={ShoppingBasket}/>
                            <Redirect from='/' to='/catalog'/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}

export default App;
