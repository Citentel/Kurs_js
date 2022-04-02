// const React = require('react') // Common.JS

import React from 'react'; // JS Modules
import ReactDOM from 'react-dom';

import App from './App/App.jsx';

import '../styles/main.css';

// JS vs JSX
// const value = 'Damian';

// const newTodo = `<li> ${value} </li>`; // Template String
// const newTodoJSX = <li> {value} </li>;

// class vs className

// const todo = <li class="completed"></li>
// const todoJSX = <li className="completed"></li>

// style

// const todo = <li className="completed" style="padding: 20px;"></li>;
// const todoJSX = <li className="completed" style={{ padding: '20px' }}></li>;

ReactDOM.render(
  <App />,
  document.querySelector('#app'),
);
