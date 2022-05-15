import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MainContext } from '../contexts/main';

export function RestrictedRoute({ children }) {
  const { currentUser } = useContext(MainContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser) {
      navigate('/');
    }
  }, [currentUser]);

  return children;
}

RestrictedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export function PublicRoute({ children }) {
  const { currentUser } = useContext(MainContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(currentUser);
    if (currentUser) {
      navigate('/dashboard');
    }
  }, [currentUser]);

  return children;
}

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
