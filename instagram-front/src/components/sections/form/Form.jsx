import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/elements/input/Input';
import Button from 'components/elements/button/Button';
import styles from './Form.module.sass';

function Form({ fields, button, handleSubmit }) {
  return (
    <form className={styles.formBox} onSubmit={handleSubmit}>
      {fields.map((element) => (
        <Input
          key={element.id}
          handleInputChange={element.handleChange}
          value={element.type === 'file' ? undefined : element.value}
          type={element.type}
          id={element.id}
          error={element.error}
        >
          {element.label.charAt(0).toUpperCase() + element.label.slice(1)}
        </Input>
      ))}
      <Button type={button.type} className={styles.formSubmit}>
        {button.value}
      </Button>
    </form>
  );
}

Form.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      handleChange: PropTypes.func.isRequired,
      value: PropTypes.string,
      label: PropTypes.string,
      type: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      error: PropTypes.string,
    })
  ).isRequired,
  button: PropTypes.shape({
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
