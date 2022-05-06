import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import styles from './Navbar.module.sass';

function Navbar({ menuActive, handleClickMenu, children }) {
  return (
    <header className={styles.header}>
      <nav className={styles.wrapper}>
        {children}
        <div className={styles.links}>
          <button className={styles.sidenavButton} onClick={handleClickMenu}>
            {menuActive ? (
              <FontAwesomeIcon
                className={styles.sidenavButtonClose}
                id="bars"
                icon={faXmark}
              />
            ) : (
              <FontAwesomeIcon id="bars" icon={faBars} />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}

Navbar.propTypes = {
  menuActive: PropTypes.bool.isRequired,
  handleClickMenu: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Navbar;
