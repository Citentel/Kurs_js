import React, { useState, useEffect } from 'react';
import Form from 'components/sections/form/Form';
import FormLink from 'components/sections/formLink/FormLink';
import styles from './Login.module.sass';

function Login() {
  const [valueInput, setValueInput] = useState({
    email: '',
    password: '',
  });
  const [errorInput, setErrorInput] = useState({
    email: null,
    password: null,
  });
  const [inputs, setInputs] = useState([]);

  useEffect(() => {
    setInputs(['email', 'password']);
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
          value: 'Log in',
        }}
        handleSubmit={handleSubmit}
      />
      <FormLink
        links={[
          {
            text: 'No account?',
            href: 'register',
            link: 'Sing up',
          },
          {
            text: 'Forgot password?',
            href: 'reset-code',
            link: 'Change it',
          },
        ]}
      />
    </div>
  );
}

export default Login;
