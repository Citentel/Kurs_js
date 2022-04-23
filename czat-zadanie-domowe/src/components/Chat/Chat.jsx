import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Chat.module.css';
import personImg from './person.svg';
import arrow from './arrow.svg';

function Chat({ chat }) {
  const [chatData, setChatData] = useState([]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  useEffect(() => {
    if (chat.length !== 0) {
      setChatData([...chat]);
    }
  }, [chat.length]);

  const clickArrowHandler = () => {
    scrollToBottom();
  };

  return (
    <div className={styles.containerChat}>
      <div className={styles.chatContent}>
        {chatData.length === 0
          ? null
          : chatData.map((el) => (
              <div className={styles.chatElement} key={el.id}>
                <img
                  className={styles.chatElementImage}
                  src={personImg}
                  alt="person_image"
                />
                <div className={styles.chatElementContent}>
                  <p className={styles.chatElementContentPerson}>{el.person}</p>
                  <p className={styles.chatElementContentMessage}>
                    {el.message}
                  </p>
                </div>
              </div>
            ))}
        <div ref={messagesEndRef} />
      </div>
      {chatData.length === 0 ? null : (
        <button
          type="button"
          className={styles.toBottom}
          onClick={clickArrowHandler}
        >
          <img className={styles.toBottomImg} src={arrow} alt="arrow" />
        </button>
      )}
    </div>
  );
}

Chat.propTypes = {
  chat: PropTypes.instanceOf(Array).isRequired,
};

export default Chat;
