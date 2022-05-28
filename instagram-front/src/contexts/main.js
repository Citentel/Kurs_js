import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebase';

export const MainContext = React.createContext({
  currentUser: null,
});

export function MainContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    }
    setIsLoading(false);
  });

  if (isLoading) return null;
  return (
    <MainContext.Provider
      /* eslint-disable-next-line react/jsx-no-constructed-context-values */
      value={{
        currentUser,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

MainContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
