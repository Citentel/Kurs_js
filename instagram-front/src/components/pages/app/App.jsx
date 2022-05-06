import React from 'react';
import Card from 'components/elements/card/Card';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import styles from './App.module.sass';

function App() {
  return (
    <div className={styles.content}>
      <section className={styles.main}>
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
      <section className={styles.sidebar}>
        <Link to="/profile" className={styles.profile}>
          <img
            className={styles.image}
            src="https://placekitten.com/56"
            alt="user profile"
          />
          <div className={styles.info}>
            <p className={styles.nickname}>robson</p>
            <p className={styles.fullName}>Robert Gontarski</p>
          </div>
        </Link>
        <div className={styles.footer}>
          <p>
            <FontAwesomeIcon icon={faCopyright} /> 2022 INSTAGRAM FROM ROBERT
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
