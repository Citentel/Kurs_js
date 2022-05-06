import React, { useState, useEffect } from 'react';
import Form from 'components/sections/form/Form';
import { Link } from 'react-router-dom';
import styles from './ResetPassword.module.sass';

function ResetPassword() {
  const [valueInput, setValueInput] = useState({
    email: '',
  });
  const [errorInput, setErrorInput] = useState({
    email: null,
  });
  const [inputs, setInputs] = useState([]);
  const [isSend, setIsSend] = useState(false);

  useEffect(() => {
    setInputs(['password']);
  }, []);

  const handleInputChange = (e) => {
    const element = e.currentTarget;
    const type = element.dataset.name;

    if (inputs.includes(type)) {
      const copyValues = valueInput;
      const copyErrors = errorInput;

      if (element.value.length === 0) {
        copyErrors[type] = 'Field can not be empty';
        setErrorInput({ ...copyErrors });
      } else {
        copyErrors[type] = null;
        setErrorInput({ ...copyErrors });
      }

      copyValues[type] = element.value;
      setValueInput({ ...copyValues });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = inputs.length;

    inputs.forEach((value) => {
      if (valueInput[value].length === 0) {
        isValid -= 1;
      }
    });

    if (isValid === inputs.length) {
      console.log(valueInput);
      setIsSend(true);
    } else {
      const copyErrors = errorInput;
      inputs.forEach((type) => {
        if (valueInput[type].length === 0) {
          copyErrors[type] = 'Field can not be empty';
          setErrorInput({ ...copyErrors });
        } else {
          copyErrors[type] = null;
          setErrorInput({ ...copyErrors });
        }
      });
    }
  };

  return (
    <div className={styles.container}>
      {isSend ? (
        <div className={styles.alertSend}>
          <p>Password has been changed</p>
          <Link className={styles.link} to="/login">
            Log in
          </Link>
        </div>
      ) : (
        <Form
          fields={inputs.map((input) => ({
            handleChange: handleInputChange,
            value: valueInput[input],
            type: input,
            id: input,
            error: errorInput[input],
            label: input,
          }))}
          button={{
            type: 'submit',
            value: 'Reset password',
          }}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default ResetPassword;
