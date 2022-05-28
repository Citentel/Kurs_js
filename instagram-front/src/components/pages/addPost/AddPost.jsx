import React, { useContext, useEffect, useState } from 'react';
import { RestrictedRoute } from 'utils/AuthorizationRoutes';
import Form from 'components/sections/form/Form';
import { useNavigate } from 'react-router-dom';
import { addFileToStorage, save } from 'services/firebase';
import { MainContext } from 'contexts/main';

import styles from './AddPost.module.sass';

function AddPost() {
  const [valueInput, setValueInput] = useState({
    title: '',
    description: '',
    file: null,
  });
  const [inputs, setInputs] = useState([]);
  const navigate = useNavigate();
  const { currentUser } = useContext(MainContext);

  useEffect(() => {
    setInputs(['title', 'description', 'file']);
  }, []);

  const handleInputChange = (e) => {
    const element = e.currentTarget;
    const type = element.dataset.name;
    const copyValues = valueInput;

    if (type === 'file') {
      // eslint-disable-next-line prefer-destructuring
      copyValues[type] = e.target.files[0];
      setValueInput({ ...copyValues });
    } else if (inputs.includes(type)) {
      copyValues[type] = element.value;
      setValueInput({ ...copyValues });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFileToStorage(valueInput.file)
      .then((url) => {
        const newPost = {
          id: Date.now(),
          title: valueInput.title,
          description: valueInput.description,
          image: url,
          likes: [],
          author: {
            name: currentUser.displayName,
            avatar: currentUser.photoURL,
          },
        };

        return save('posts', newPost);
      })
      .then(() => {
        navigate('/dashboard');
      });
  };

  return (
    <RestrictedRoute>
      <div className={styles.container}>
        <Form
          fields={inputs.map((input) => ({
            handleChange: handleInputChange,
            value: input === 'file' ? undefined : valueInput[input],
            type: input,
            id: input,
            error: null,
            label: input,
          }))}
          button={{
            type: 'submit',
            value: 'Create post',
          }}
          handleSubmit={handleSubmit}
        />
      </div>
    </RestrictedRoute>
  );
}

export default AddPost;
