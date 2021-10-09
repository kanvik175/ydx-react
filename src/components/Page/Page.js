import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../../routes';
import Footer from '../Footer/Footer';
import styles from './Page.module.css';
import SettingsContext from '../../context';


export default function Page() {
  const [ isSettingsApplied, setIsSettingsApplied ] = useState(false);
  
  const settings = {
    isSettingsApplied,
    setIsSettingsApplied,
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <SettingsContext.Provider value={settings}>
          <Switch>
            { routes.map((route, index) => <Route key={index} {...route} />) }
          </Switch>
        </SettingsContext.Provider>
      </div>
      <Footer />
    </div>
  )
}