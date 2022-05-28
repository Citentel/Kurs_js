import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { save, update } from 'services/firebase';
import { MainContext } from 'contexts/main';
import styles from './Card.module.sass';

function Card({ showHeader, post, changePosts }) {
  const [currentPost, setCurrentPost] = useState(post);
  const { currentUser } = useContext(MainContext);
  const handleLike = (postObject) => {
    if (postObject.likes) {
      const isFind = postObject.likes.find(
        (el) => el.email === currentUser.email
      );

      if (isFind === null) {
        const updatedPost = {
          ...postObject,
          likes: [...postObject.likes, { email: currentUser.email }],
        };

        update(`posts/${postObject.id}`, updatedPost);

        save('notifications', {
          id: Date.now(),
          value: 'Ktoś dał ci lajka',
          recipient: postObject.author.name,
        });

        changePosts(updatedPost);
        setCurrentPost(updatedPost);
      }
    } else {
      const updatedPost = {
        ...postObject,
        likes: [{ email: currentUser.email }],
      };
      update(`posts/${postObject.id}`, updatedPost);

      save('notifications', {
        id: Date.now(),
        value: 'Ktoś dał ci lajka',
        recipient: postObject.author.name,
      });

      changePosts(updatedPost);
      setCurrentPost(updatedPost);
    }
  };

  return (
    <div className={styles.card}>
      {/* eslint-disable-next-line no-nested-ternary */}
      {showHeader ? (
        currentPost.author ? (
          <div className={styles.cardHeader}>
            <div className={styles.link}>
              <img
                className={styles.image}
                src={currentPost.author?.avatar}
                alt="profile"
              />
              <p>{currentPost.author?.name}</p>
            </div>
          </div>
        ) : null
      ) : null}
      <div className={styles.cardBody}>
        <img className={styles.image} src={currentPost.image} alt="cat" />
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.icons}>
          <div>
            <button
              className={styles.likeButton}
              onClick={() => handleLike(currentPost)}
            >
              <FontAwesomeIcon
                icon={
                  currentPost.likes?.find(
                    (el) => el.email === currentUser.email
                  )
                    ? faHeartSolid
                    : faHeart
                }
              />
            </button>
            <FontAwesomeIcon icon={faComment} />
          </div>
        </div>
        <div className={styles.content}>
          <p className={styles.likes}>
            Liczba polubień: {currentPost.likes?.length}
          </p>
          <p className={styles.title}>{currentPost.title}</p>
          <p className={styles.message}>{currentPost.description}</p>
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
  changePosts: PropTypes.func.isRequired,
  showHeader: PropTypes.bool,
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Card;
