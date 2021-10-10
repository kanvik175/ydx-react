import React from 'react';
import Button from '../Button/Button';
import styles from './ButtonWithIcon.module.css';

export default function ButtonWithIcon({ text, icon, clickHandler, type }) {
  const isTextExists = !!text;
  return (
    <Button color='secondary' size='small' clickHandler={clickHandler} type={type} >
      <div className={styles.wrapper}>
        <img className={styles.icon} src={icon} alt='' />
        {isTextExists && <p className={styles.name}>{text}</p>}
      </div>
    </Button>
  )
}