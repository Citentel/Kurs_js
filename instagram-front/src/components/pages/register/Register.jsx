import React, { useState, useEffect } from 'react';
import Form from 'components/sections/form/Form';
import FormLink from 'components/sections/formLink/FormLink';
import { registerUser } from 'services/firebase';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { PublicRoute } from 'utils/AuthorizationRoutes';
import styles from './Register.module.sass';

function Register() {
  const [valueInput, setValueInput] = useState({
    email: '',
    password: '',
  });
  const [errorInput, setErrorInput] = useState({
    email: null,
    password: null,
  });
  const [inputs, setInputs] = useState([]);
  const navigate = useNavigate();

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
      registerUser(valueInput.email, valueInput.password)
        .then(() => {
          Swal.fire({
            title: `Success!`,
            text: 'User register successfully',
            icon: 'success',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer);
              toast.addEventListener('mouseleave', Swal.resumeTimer);
            },
          }).then(() => {
            navigate('/dashboard');
          });
        })
        .catch((error) =>
          Swal.fire({
            title: `Error!`,
            text: error.message,
            icon: 'error',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer);
              toast.addEventListener('mouseleave', Swal.resumeTimer);
            },
          })
        );
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
    <PublicRoute>
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
            value: 'Sign up',
          }}
          handleSubmit={handleSubmit}
        />
        <FormLink
          links={[
            {
              text: 'Do you have an account?',
              href: 'login',
              link: 'Log in',
            },
          ]}
        />
      </div>
    </PublicRoute>
  );
}

export default Register;
