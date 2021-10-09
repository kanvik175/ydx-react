import React from 'react';
import styles from './Input.module.css';

export default function Input({
  label,
  isRequired,
  placeholder,
  value,
  changeHandler,
  clearHandler,
  textAlign = 'left',
  name,
  width,
  padding,
  mask,
  isError = false,
}) {
  const inputId = `${name}-id`;
  const labelClassName = `${styles.label} ${
    isRequired && styles.label__required
  }`;
  const isLabelExists = !!label;
  const isClearButtonExists = clearHandler && value.length > 0;

  const inputContainerStyle = {
    width,
  };

  const inputStyle = {
    textAlign,
  };

  const inputClass = `${styles.input} ${isError && styles.input__error}`

  const handleChange = (e) => {
    const { value } = e.target;

    if (!mask || value.length === 0 || mask.test(value)) {
      changeHandler(value);
    }
  }

  return (
    <div className={styles.wrapper}>
      {isLabelExists && (
        <label className={labelClassName} htmlFor={inputId}>
          {label}
        </label>
      )}
      <div style={inputContainerStyle} className={styles.inputContainer}>
        <input
          type="text"
          style={inputStyle}
          id={inputId}
          placeholder={placeholder}
          className={inputClass}
          value={value}
          onChange={handleChange}
        />
        {isClearButtonExists && (
          <button
            tabIndex='-1'
            type="button"
            onClick={clearHandler}
            className={styles.clearButton}
          />
        )}
      </div>
    </div>
  );
}