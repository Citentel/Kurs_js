import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.sass';

function NotFound() {
  return (
    <div className={styles.content}>
      <h1>Przepraszamy, ta strona jest niedostępna</h1>
      <h3>
        Kliknięty link mógł być uszkodzony lub strona mogła zostać usunięta.{' '}
        <Link to="/" className={styles.link}>
          Powróć do Instagramu.
        </Link>
      </h3>
    </div>
  );
}

export default NotFound;
