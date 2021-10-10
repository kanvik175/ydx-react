import React from 'react';
import styles from './Settings.module.css';
import Logo from '../../components/Logo/Logo';
import Form from './Form/Form';

export default function Settings() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Logo />
      </header>
      <main className={styles.content}>
        <h3 className={styles.title}>Settings</h3>
        <p className={styles.description}>
          Configure repository connection and synchronization settings.
        </p>
        <Form />
      </main>
    </div>
  ) 
}