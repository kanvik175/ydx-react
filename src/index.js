import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        { routes.map((route) => <Route {...route} />) }
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);