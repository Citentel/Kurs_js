import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './MainLayout.module.css';

function MainLayout({ children }) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <p className={styles.title}>Hello header</p>
        <nav className={styles.nav}>
          <Link to="/" className={styles.link}>
            My chat
          </Link>
          <Link to="/me" className={styles.link}>
            My profile
          </Link>
        </nav>
      </header>
      <div className={styles.content}>{children}</div>
      <footer className={styles.footer}>Hello footer</footer>
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
