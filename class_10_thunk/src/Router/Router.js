import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducer from '../reducers/';
import Header from '../Header/Header';
import App from '../App/App';
import About from '../About/About';
import NotFound from '../404/404';

const store = createStore(
  reducer,
  applyMiddleware(reduxThunk),
);
store.subscribe(() => {
    console.log(store.getState());
});

function Router() {
  return (
    <Provider store={store}>
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/todo/:id" component={App} />
                <Route path="/about" component={About} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
      </Provider>
  );
}

export default Router;
