import React, { useState, useEffect } from 'react';
import { observe, save } from 'services/firebase';
import Chat from 'components/sections/chat/Chat';
import ChatForm from 'components/sections/chatForm/ChatForm';
import styles from './App.module.css';

function App() {
  const [personValue, setPersonValue] = useState(null);
  const [messageValue, setMessageValue] = useState(null);
  const [personError, setPersonError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [chatData, setChatData] = useState([]);

  useEffect(() => {
    observe('/', setChatData);
  }, []);

  const inputChangeHandler = (event) => {
    const key = event.currentTarget.getAttribute('name');
    const data = event.currentTarget.value;

    if (key === 'person') {
      if (data !== null && data.length === 0) {
        setPersonError(true);
      } else {
        setPersonError(false);
      }
      setPersonValue(data);
    } else if (key === 'message') {
      if (data !== null && data.length === 0) {
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
      personValue !== null &&
      personValue.length !== 0 &&
      messageValue !== null &&
      messageValue.length !== 0
    ) {
      const newMessage = {
        id: Date.now(),
        person: personValue,
        message: messageValue,
      };

      const actualChatData = [...chatData, newMessage];

      save('/', newMessage);

      setChatData(actualChatData);
      setMessageValue(null);
    } else {
      if (personValue === null || personValue.length === 0) {
        setPersonError(true);
      }

      if (messageValue === null || messageValue.length === 0) {
        setMessageError(true);
      }
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.containerMain}>
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
      </main>
    </div>
  );
}

export default App;
