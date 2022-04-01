import React, { useState } from 'react';
import Chat from '../Chat/Chat';
import styles from './App.module.css';

function App() {
  const [personValue, setPersonValue] = useState(null);
  const [messageValue, setMessageValue] = useState(null);
  const [personError, setPersonError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [chatData, setChatData] = useState(
    JSON.parse(localStorage.getItem('chatData')) ?? []
  );

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
      const index = chatData.length;
      const actualChatData = [
        ...chatData,
        {
          id: index,
          person: personValue,
          message: messageValue,
        },
      ];

      localStorage.setItem('chatData', JSON.stringify(actualChatData));
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
        <form
          id="form-chat"
          className={styles.form}
          onSubmit={formSubmitHandler}
        >
          <label htmlFor="person" className={styles.formGroup}>
            <p className={styles.formLabel}>Person</p>
            <input
              type="text"
              id="person"
              name="person"
              className={styles.formInput}
              onChange={inputChangeHandler}
              value={personValue ?? ''}
            />
            {personError ? (
              <p className={styles.formError}>Field can not be empty</p>
            ) : null}
          </label>
          <label htmlFor="message" className={styles.formGroup}>
            <p className={styles.formLabel}>Message</p>
            <textarea
              rows={5}
              id="message"
              name="message"
              className={styles.formInput}
              onChange={inputChangeHandler}
              value={messageValue ?? ''}
            />
            {messageError ? (
              <p className={styles.formError}>Field can not be empty</p>
            ) : null}
          </label>
          <button label="submit" type="submit" className={styles.formSubmit}>
            Send Message
          </button>
        </form>
      </main>
    </div>
  );
}

export default App;
