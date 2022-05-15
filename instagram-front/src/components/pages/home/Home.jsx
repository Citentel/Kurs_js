import React from 'react';
import { PublicRoute } from 'utils/AuthorizationRoutes';
import styles from './Home.module.sass';

function Home() {
  return (
    <PublicRoute>
      <div className={styles.container}>Hello home!</div>
    </PublicRoute>
  );
}

export default Home;
