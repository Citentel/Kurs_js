import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({ label, type, className, children }) {
  return (
    <button label={label} type={type} className={className || styles.button}>
      {children}
    </button>
  );
}

/* Setting the default props for the Button component. */
Button.defaultProps = {
  label: 'submit',
  type: 'submit',
  className: null,
  children: null,
};

/* Setting the propTypes for the Button component. */
Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
