import React from 'react';
import styles from './Loader.module.sass';

function Loader() {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default Loader;
