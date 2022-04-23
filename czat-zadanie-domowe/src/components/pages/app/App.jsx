import React, { useState, useEffect } from 'react';
import { observe, get, save } from 'services/firebase';
import Chat from 'components/sections/chat/Chat';
import ChatForm from 'components/sections/chatForm/ChatForm';
import MainLayout from 'components/layouts/mainLayout/MainLayout';
import styles from './App.module.css';

function App() {
  const [personValue, setPersonValue] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const [personError, setPersonError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [chatData, setChatData] = useState([]);

  useEffect(() => {
    observe('messages', setChatData);
    get('currentUser').then((user) => {
      setPersonValue(user.name);
    });
  }, []);

  const inputChangeHandler = (event) => {
    const key = event.currentTarget.getAttribute('name');
    const data = event.currentTarget.value;

    if (key === 'message') {
      if (data === '' || data.length === 0) {
        setMessageError(true);
      } else {
        setMessageError(false);
      }
      setMessageValue(data);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (
      personValue !== '' &&
      personValue.length !== 0 &&
      messageValue !== '' &&
      messageValue.length !== 0
    ) {
      const newMessage = {
        id: Date.now(),
        person: personValue,
        message: messageValue,
      };

      const actualChatData = [...chatData, newMessage];

      save('messages', newMessage);

      setChatData(actualChatData);
      setMessageValue('');
    } else {
      if (personValue === '' || personValue.length === 0) {
        setPersonError(true);
      }

      if (messageValue === '' || messageValue.length === 0) {
        setMessageError(true);
      }
    }
  };

  return (
    <MainLayout>
      <h1 className={styles.headline1}>Chat</h1>
      <Chat chat={chatData} />
      <ChatForm
        formSubmit={formSubmitHandler}
        personChange={inputChangeHandler}
        personValue={personValue}
        personError={personError}
        messageChange={inputChangeHandler}
        messageValue={messageValue}
        messageError={messageError}
      />
    </MainLayout>
  );
}

export default App;
