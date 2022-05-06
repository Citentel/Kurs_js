import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './formLink.module.sass';

function FormLink({ links }) {
  return (
    <div className={styles.linksContainer}>
      {links.map((element) => (
        <p key={element.href}>
          {element.text}{' '}
          <Link to={`/${element.href}`} className={styles.link}>
            {element.link}
          </Link>
        </p>
      ))}
    </div>
  );
}

FormLink.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FormLink;
