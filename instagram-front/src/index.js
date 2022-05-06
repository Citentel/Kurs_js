import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/css/style.sass';
import Router from './Router';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.querySelector('#root')
);
