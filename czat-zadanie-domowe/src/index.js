import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css';
import 'material-icons/iconfont/material-icons.css';
import Router from './Router';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.querySelector('#root')
);
