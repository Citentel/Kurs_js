import React from 'react';
import InputGroup from 'components/elements/inputGroup/InputGroup';
import Button from 'components/elements/button/Button';
import PropTypes from 'prop-types';
import styles from './ChatForm.module.css';

function ChatForm({
  formSubmit,
  personChange,
  personValue,
  personError,
  messageChange,
  messageValue,
  messageError,
}) {
  return (
    <form id="form-chat" className={styles.form} onSubmit={formSubmit}>
      <InputGroup
        type="text"
        name="person"
        id="person"
        label="Person"
        onChange={personChange}
        value={personValue}
        error={personError}
      />
      <InputGroup
        type="textarea"
        rows={5}
        name="message"
        id="message"
        label="Message"
        onChange={messageChange}
        value={messageValue}
        error={messageError}
      />
      <Button label="submit" type="submit">
        Send &nbsp; <span className="material-icons-round">send</span>
      </Button>
    </form>
  );
}

ChatForm.defaultProps = {
  formSubmit: null,
  personChange: null,
  personValue: null,
  personError: null,
  messageChange: null,
  messageValue: null,
  messageError: null,
};

ChatForm.propTypes = {
  formSubmit: PropTypes.func,
  personChange: PropTypes.func,
  personValue: PropTypes.string,
  personError: PropTypes.bool,
  messageChange: PropTypes.func,
  messageValue: PropTypes.string,
  messageError: PropTypes.bool,
};

export default ChatForm;
