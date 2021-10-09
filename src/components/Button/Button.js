import React from 'react';
import styles from './Button.module.css';

export default function Button({ 
  children, 
  clickHandler, 
  color, 
  size = 'large', 
  disabled,
  isFullWidth,
  type = 'button'
}) {

  let wrapperClass = `${styles.wrapper} ${getSizeClass(size)} ${getColorClass(color)}`;

  if (isFullWidth) {
    wrapperClass = `${wrapperClass} ${styles.wrapper__fullWidth}`
  }

  return (
    <button type={type} disabled={disabled} onClick={clickHandler} className={wrapperClass}>
      {children}
    </button>
  );
}

const getColorClass = (color) => {
  if (color) {
    return styles[`wrapper__color_${color}`]
  }

  return '';
}

const getSizeClass = (size) => {
  return styles[`wrapper__size_${size}`]
}