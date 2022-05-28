import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { MainContext } from 'contexts/main';
import { RestrictedRoute } from 'utils/AuthorizationRoutes';
import { get } from 'services/firebase';
import Loader from 'components/elements/loader/Loader';
import Card from '../../elements/card/Card';
import styles from './Dashboard.module.sass';

function Dashboard() {
  const { currentUser } = useContext(MainContext);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    get('posts').then((res) => {
      setPosts(Object.values(res));
      setIsLoading(false);
    });
  }, []);

  const handleChangeLikes = (post) => {
    const copiedPostArray = [...posts];
    const selectedPostIndex = posts.findIndex(
      (frontPost) => frontPost.id === post.id
    );

    copiedPostArray[selectedPostIndex].likes = post.likes;
    setPosts(copiedPostArray);
  };

  return (
    <RestrictedRoute>
      <div className={styles.content}>
        <section className={styles.main}>
          {isLoading ? (
            <Loader />
          ) : (
            posts.map((post) => (
              <Card key={post.id} post={post} changePosts={handleChangeLikes} />
            ))
          )}
        </section>
        <section className={styles.sidebar}>
          {currentUser ? (
            <Link to="/profile" className={styles.profile}>
              <img
                className={styles.image}
                src={currentUser.photoURL}
                alt="Profile"
              />
              <div className={styles.info}>
                <p className={styles.nickname}>{currentUser.displayName}</p>
                <p className={styles.fullName}>{currentUser.email}</p>
              </div>
            </Link>
          ) : null}

          <div className={styles.footer}>
            <p>
              <FontAwesomeIcon icon={faCopyright} /> 2022 INSTAGRAM FROM ROBERT
            </p>
          </div>
        </section>
      </div>
    </RestrictedRoute>
  );
}

export default Dashboard;
