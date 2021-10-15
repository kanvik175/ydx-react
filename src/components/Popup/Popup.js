import React, { useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import styles from './Popup.module.css';

export default function Popup({ children, isOpen, closePopup, width, height }) {

  const wrapperClass = `${styles.wrapper} ${!isOpen && styles.wrapper__closed}`;

  const clickHandler = (e) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  }

  const keyDownHandler = useCallback((e) => {
    if (e.key === "Escape") {
      closePopup();
    }
  }, [closePopup]);

  useEffect(() => {

    if (isOpen) {
      document.addEventListener('keydown', keyDownHandler, true);
    }
    return () => {
      if (isOpen) {
        document.removeEventListener('keydown', keyDownHandler, true);
      }
    }
  }, [isOpen, keyDownHandler])

  return ReactDOM.createPortal(
    <div onClick={clickHandler} className={wrapperClass}>
      <div className={styles.inner}>
        {children}
      </div>
    </div>,
    document.getElementById('popup')
  )
}