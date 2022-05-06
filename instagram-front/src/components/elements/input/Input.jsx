import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.sass';

function Input({ handleInputChange, value, children, type, id, error }) {
  return (
    <label htmlFor={id} className={styles.formGroup}>
      {children !== null ? <p>{children}</p> : null}
      <input
        data-name={id}
        id={id}
        type={type}
        className={styles.formInput}
        onChange={handleInputChange}
        value={value}
      />
      {error !== null ? <p className={styles.inputError}>{error}</p> : null}
    </label>
  );
}

Input.defaultProps = {
  value: '',
  error: null,
  children: null,
};

Input.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  children: PropTypes.string,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  error: PropTypes.string,
};

export default Input;
