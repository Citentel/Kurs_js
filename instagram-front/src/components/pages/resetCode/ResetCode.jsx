import React, { useState, useEffect } from 'react';
import Form from 'components/sections/form/Form';
import FormLink from 'components/sections/formLink/FormLink';
import Button from 'components/elements/button/Button';
import styles from './ResetCode.module.sass';

function ResetCode() {
  const [valueInput, setValueInput] = useState({
    email: '',
  });
  const [errorInput, setErrorInput] = useState({
    email: null,
  });
  const [inputs, setInputs] = useState([]);
  const [isSend, setIsSend] = useState(false);

  useEffect(() => {
    setInputs(['email']);
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
          <p>
            If the email exists, a message will be sent to your email inbox with
            a verification code.
          </p>
          <Button
            type="button"
            className={styles.button}
            handleClick={() => setIsSend(false)}
          >
            Send code again
          </Button>
        </div>
      ) : (
        <>
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
              value: 'Send reset code',
            }}
            handleSubmit={handleSubmit}
          />
          <FormLink
            links={[
              {
                text: 'Reminded password?',
                href: 'login',
                link: 'Log in',
              },
              {
                text: 'No account?',
                href: 'register',
                link: 'Sing up',
              },
            ]}
          />
        </>
      )}
    </div>
  );
}

export default ResetCode;
