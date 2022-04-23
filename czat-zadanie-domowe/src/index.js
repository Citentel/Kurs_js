import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css';
import App from 'components/pages/app/App';
import 'material-icons/iconfont/material-icons.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root')
);
