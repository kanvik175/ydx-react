import React from 'react';
import styles from './Button.module.css';

// color: primary, secondary 
// size: small, large
export default function Button({ 
  children, 
  icon, 
  clickHandler, 
  color, 
  size = 'large', 
  disabled,
  isFullWidth
}) {

  let wrapperClass = `${styles.wrapper} ${getSizeClass(size)} ${getColorClass(color)}`;

  if (isFullWidth) {
    wrapperClass = `${wrapperClass} ${styles.wrapper__fullWidth}`
  }

  return (
    <button disabled={disabled} onClick={clickHandler} class={wrapperClass}>
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