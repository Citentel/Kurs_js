import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputGroup.module.css';

function InputGroup({ type, id, name, label, value, onChange, error, rows }) {
  return (
    <label htmlFor="person" className={styles.formGroup}>
      <p className={styles.formLabel}>{label}</p>
      {type === 'textarea' ? (
        <textarea
          rows={rows}
          id={id}
          name={name}
          className={styles.formInput}
          onChange={onChange}
          value={value}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          className={styles.formInput}
          onChange={onChange}
          value={value}
        />
      )}

      {error ? (
        <p className={styles.formError}>Field can not be empty</p>
      ) : null}
    </label>
  );
}

InputGroup.defaultProps = {
  type: 'text',
  name: null,
  id: null,
  label: null,
  value: null,
  onChange: null,
  error: false,
  rows: 3,
};

InputGroup.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.bool,
  rows: PropTypes.number,
};

export default InputGroup;
