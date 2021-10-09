import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Popup.module.css';

export default function Popup({ children, isOpen, width, height }) {

  const wrapperClass = `${styles.wrapper} ${!isOpen && styles.wrapper__closed}`;

  return ReactDOM.createPortal(
    <div className={wrapperClass}>
      <div className={styles.inner}>
        {children}
      </div>
    </div>,
    document.getElementById('popup')
  )
}