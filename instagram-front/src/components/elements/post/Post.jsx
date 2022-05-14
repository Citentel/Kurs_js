import React, { useEffect, useRef, useState } from 'react';
import Image from 'components/elements/image/Image';
import Card from 'components/elements/card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './Post.module.sass';

function Post() {
  const [showPost, setShowPost] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        if (event.target.getAttribute('id') !== 'bars') {
          setShowPost(false);
        }
      } else if (event.target.tagName === 'A') {
        setTimeout(() => {
          setShowPost(false);
        }, 50);
      }
    };

    document.addEventListener('mousedown', handleClickOutside, true);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
    };
  }, [ref]);

  return (
    <div className={styles.postContainer}>
      <button
        className={styles.buttonPost}
        onClick={() => {
          setShowPost(!showPost);
        }}
      >
        <Image fileName="320.jpeg" alt="Post image" />
      </button>
      {showPost ? (
        <div ref={ref} className={styles.modalPost}>
          <div className={styles.headerCard}>
            <button
              className={styles.btnClose}
              onClick={() => setShowPost(false)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
          <Card showHeader={false} />
        </div>
      ) : null}
    </div>
  );
}

export default Post;
