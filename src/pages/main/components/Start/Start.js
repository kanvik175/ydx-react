import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useHistory } from 'react-router-dom';
import styles from './Start.module.css';
import Header from '../../../../components/Header/Header';
import Logo from '../../../../components/Logo/Logo';
import Button from '../../../../components/Button/Button';
import ButtonWithIcon from '../../../../components/ButtonWithIcon/ButtonWithIcon';
import settingsLogo from './assets/settings_logo.svg';
import gearIcon from '../../../../assets/gear.svg';

export default function BuildHistory() {

  const history = useHistory();

  const clickHandler = () => {
    history.push('/settings');
  }

  return (
    <div className={styles.wrapper}>
      <Helmet>
        <title>Main</title>
        <meta property="og:title" content="Main" />
      </Helmet>
      <Header>
        <Logo />
        <ButtonWithIcon clickHandler={clickHandler} text='Settings' icon={gearIcon}>Settings</ButtonWithIcon>
      </Header>
      <main className={styles.content}>
        <div className={styles.info}>
          <img className={styles.settingsLogo} src={settingsLogo} alt='settings logo' />
          <p className={styles.message}>Configure repository connection and synchronization settings</p>
          <Button clickHandler={clickHandler} color='primary'>Open settings</Button>
        </div>
      </main>
    </div>
  )
}