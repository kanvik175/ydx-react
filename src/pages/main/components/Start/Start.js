import React from 'react';
import styles from './Start.module.css';
import Logo from '../../../../components/Logo/Logo';
import Button from '../../../../components/Button/Button';
import settingsLogo from './assets/settings_logo.svg';

export default function BuildHistory() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Logo />
        <Button size='small' color='secondary'>Settings</Button>
      </header>
      <main className={styles.content}>
        <div className={styles.info}>
          <img className={styles.settingsLogo} src={settingsLogo} alt='settings logo' />
          <p className={styles.message}>Configure repository connection and synchronization settings</p>
          <Button isFullWidth color='primary'>Open settings</Button>
        </div>
      </main>
    </div>
  )
}