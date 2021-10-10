import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Start.module.css';
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
      <header className={styles.header}>
        <Logo />
        <ButtonWithIcon clickHandler={clickHandler} text='Settings' icon={gearIcon}>Settings</ButtonWithIcon>
      </header>
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