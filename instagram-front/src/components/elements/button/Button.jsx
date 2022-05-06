import React from 'react';
import PropTypes from 'prop-types';

function Button({ className, handleClick, type, children }) {
  return (
    <button type={type} className={className} onClick={handleClick}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  children: 'click me',
  handleClick: null,
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.string,
};

export default Button;
