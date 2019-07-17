import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import App from '../App/App';
import About from '../About/About';
import NotFound from '../404/404';

function Router() {
  return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/todo/:id" component={App} />
                <Route path="/about" component={About} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
  );
}

export default Router;
