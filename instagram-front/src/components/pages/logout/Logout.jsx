import React from 'react';
import { Navigate } from 'react-router-dom';

function Logout() {
  return <Navigate to="/" replace />;
}

export default Logout;
