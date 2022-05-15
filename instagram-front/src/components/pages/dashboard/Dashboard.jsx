import React, { useContext } from 'react';
import Card from 'components/elements/card/Card';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { MainContext } from 'contexts/main';
import { RestrictedRoute } from 'utils/AuthorizationRoutes';
import styles from './Dashboard.module.sass';

function Dashboard() {
  const { currentUser } = useContext(MainContext);

  return (
    <RestrictedRoute>
      <div className={styles.content}>
        <section className={styles.main}>
          <Card />
          <Card />
          <Card />
          <Card />
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
