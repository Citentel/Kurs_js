import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import styles from './Menu.module.sass';

function Menu({ menuActive, setMenuActive, handleClickMenu, children }) {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        if (event.target.getAttribute('id') !== 'bars') {
          setMenuActive(false);
        }
      } else if (event.target.tagName === 'A') {
        setMenuActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside, true);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
    };
  }, [ref]);

  return (
    <div
      ref={ref}
      id="sidenav"
      className={`${styles.sideNav} ${menuActive ? styles.sideNavActive : ''}`}
    >
      <button className={styles.closeBtn} onClick={handleClickMenu}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <div className={styles.links}>{children}</div>
    </div>
  );
}

Menu.propTypes = {
  menuActive: PropTypes.bool.isRequired,
  setMenuActive: PropTypes.func.isRequired,
  handleClickMenu: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Menu;
