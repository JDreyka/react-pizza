import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/redux-store.js';

import {createMuiTheme} from '@material-ui/core';
import {purple} from '@material-ui/core/colors';
import {ThemeProvider} from '@material-ui/styles';

import Header from './components/Header/Header.jsx';
import CatalogContainer from './components/Catalog/CatalogContainer.jsx';
import BasketContainer from './components/ShoppingBasket/BasketContainer.js';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: purple[500],
        },
    },
});

function App() {
    return (
      <div className='app'>
          <ThemeProvider theme={theme}>
              <BrowserRouter>
                  <Provider store={store}>
                      <Header/>
                      <div className='section'>
                          <Switch>
                              <Route path='/catalog' component={CatalogContainer}/>
                              <Route path='/basket' component={BasketContainer}/>
                              <Redirect from='/' to='/catalog'/>
                          </Switch>
                      </div>
                  </Provider>
              </BrowserRouter>
          </ThemeProvider>
      </div>
    );
}

export default App;