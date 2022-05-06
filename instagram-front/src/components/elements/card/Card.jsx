import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import styles from './Card.module.sass';

function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <Link to="/profile" className={styles.link}>
          <img src="https://placekitten.com/32" alt="user profile" />
          <p>nazwa usera</p>
        </Link>
      </div>
      <div className={styles.cardBody}>
        <img
          src="https://placekitten.com/614"
          alt="cat"
          className={styles.image}
        />
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.icons}>
          <div>
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faComment} />
          </div>
        </div>
        <div className={styles.content}>
          <p className={styles.likes}>Liczba polubień: 0</p>
          <p className={styles.message}>wiadomość</p>
          <p className={styles.comment}>Zobacz wszystkie komentarze: 0</p>
          <p className={styles.date}>1 dzień temu</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
