import React from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './Settings.module.css';
import Header from '../../components/Header/Header';
import Logo from '../../components/Logo/Logo';
import Form from './components/Form/Form';

export default function Settings() {
  return (
    <div className={styles.wrapper}>
      <Helmet>
        <title>Settings</title>
        <meta property="og:title" content="Settings" />
      </Helmet>
      <Header>
        <Logo />
      </Header>
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