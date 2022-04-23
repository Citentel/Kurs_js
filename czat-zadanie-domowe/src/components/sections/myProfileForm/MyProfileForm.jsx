import React from 'react';
import PropTypes from 'prop-types';
import InputGroup from 'components/elements/inputGroup/InputGroup';
import Button from 'components/elements/button/Button';
import styles from './MyProfileForm.module.css';

function MyProfileForm({ formSubmit, nameChange, nameValue, nameError }) {
  return (
    <form id="form-chat" className={styles.form} onSubmit={formSubmit}>
      <InputGroup
        type="text"
        name="name"
        id="name"
        label="Name"
        onChange={nameChange}
        value={nameValue}
        error={nameError}
      />
      <Button label="submit" type="submit">
        Update name &nbsp;{' '}
        <span className="material-icons-round">cloud_upload</span>
      </Button>
    </form>
  );
}

MyProfileForm.defaultProps = {
  formSubmit: null,
  nameChange: null,
  nameValue: '',
  nameError: false,
};

MyProfileForm.propTypes = {
  formSubmit: PropTypes.func,
  nameChange: PropTypes.func,
  nameValue: PropTypes.string,
  nameError: PropTypes.bool,
};

export default MyProfileForm;
