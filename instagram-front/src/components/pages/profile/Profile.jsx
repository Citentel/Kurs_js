import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Post from 'components/elements/post/Post';
import { RestrictedRoute } from 'utils/AuthorizationRoutes';
import { MainContext } from 'contexts/main';
import styles from './Profile.module.sass';

function Profile() {
  const { currentUser } = useContext(MainContext);

  return (
    <RestrictedRoute>
      <div className={styles.container}>
        <div className={styles.header}>
          {currentUser ? (
            <div className={styles.image}>
              <img src={currentUser.photoURL} alt="Profile" />
            </div>
          ) : null}

          <div className={styles.content}>
            {currentUser ? (
              <div className={styles.nickname}>
                <p>{currentUser.displayName}</p>
              </div>
            ) : null}
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
            <Link to="/edit-profile">Edit profile</Link>
          </div>
        </div>
        <div className={styles.posts}>
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </RestrictedRoute>
  );
}

export default Profile;
