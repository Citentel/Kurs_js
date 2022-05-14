import React from 'react';
import Image from 'components/elements/image/Image';
import Post from 'components/elements/post/Post';
import styles from './Profile.module.sass';

function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.image}>
          <Image fileName="150.jpeg" alt="Profile image" />
        </div>
        <div className={styles.content}>
          <div className={styles.nickname}>
            <p>gontarsky</p>
          </div>
          <div className={styles.information}>
            <p>
              Posty: <strong>0</strong>
            </p>
            <p>
              Obserwujący: <strong>55</strong>
            </p>
            <p>
              Obserwowani: <strong>48</strong>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.posts}>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default Profile;
