import React, { useEffect, useState } from 'react';
import { get, update } from 'services/firebase';
import { useNavigate } from 'react-router-dom';
import MainLayout from 'components/layouts/mainLayout/MainLayout';
import MyProfileForm from 'components/sections/myProfileForm/MyProfileForm';
import styles from './MyProfile.module.css';

function MyProfile() {
  const [nameValue, setNameValue] = useState('');
  const [nameError, setNameError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    get('currentUser').then((user) => {
      setNameValue(user.name);
    });
  }, []);

  const inputChangeHandler = (event) => {
    const data = event.currentTarget.value;

    if (data === '' || data.length === 0) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    setNameValue(data);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (nameValue !== '' && nameValue.length !== 0) {
      update('currentUser', {
        name: nameValue,
      }).then(() => {
        setNameValue('');
        navigate('/');
      });
    } else {
      setNameError(true);
    }
  };

  return (
    <MainLayout>
      <h1 className={styles.headline1}>My profile</h1>
      <MyProfileForm
        formSubmit={formSubmitHandler}
        nameValue={nameValue}
        nameError={nameError}
        nameChange={inputChangeHandler}
      />
    </MainLayout>
  );
}

export default MyProfile;
