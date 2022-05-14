import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';
import styles from './Card.module.sass';
import Image from '../image/Image';

function Card({ showHeader }) {
  return (
    <div className={styles.card}>
      {showHeader ? (
        <div className={styles.cardHeader}>
          <Link to="/profile" className={styles.link}>
            <Image
              className={styles.image}
              fileName="32.jpeg"
              alt="user profile"
            />
            <p>nazwa usera</p>
          </Link>
        </div>
      ) : null}
      <div className={styles.cardBody}>
        <Image fileName="614.jpeg" alt="cat" />
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

Card.defaultProps = {
  showHeader: true,
};

Card.propTypes = {
  showHeader: PropTypes.bool,
};

export default Card;
