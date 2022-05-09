import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from 'components/elements/loader/Loader';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Image.module.sass';

function Image({ fileName, className, alt }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    import(`assets/image/${fileName}`)
      .then((resp) => {
        setImage(resp.default);
      })
      .catch((err) => {
        setError(err);
      });
  }, [image]);

  if (error) {
    return (
      <p className={styles.error}>
        <FontAwesomeIcon icon={faImage} size="2x" />
        Error loading photo
      </p>
    );
  }

  return (
    <>
      {loading ? <Loader width="500px" height="500px" /> : null}
      <img
        style={loading ? { display: 'none' } : {}}
        className={`${styles.img} ${className}`}
        src={image}
        alt={alt}
        onLoad={() => {
          setLoading(false);
        }}
      />
    </>
  );
}

Image.defaultProps = {
  className: '',
};

Image.propTypes = {
  fileName: PropTypes.string.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string.isRequired,
};

export default Image;
