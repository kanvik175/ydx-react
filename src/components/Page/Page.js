import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../../routes';
import Footer from '../Footer/Footer';

export default function Page() {
  return (
    <div>
      <div>
        <Switch>
          { routes.map((route) => <Route {...route} />) }
        </Switch>
      </div>
      <Footer />
    </div>
  )
}