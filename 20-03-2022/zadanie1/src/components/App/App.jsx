// useState -> dla state
// useEffect -> my decydujemy kiedy chcemy tego użyć
import React, { useState, useEffect } from 'react';
import TodoList from '../TodoList/TodoList.jsx';
import styles from './App.module.css';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) ?? []);
  const [isErrorMessage, setIsErrorMessage] = useState(false);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todos')) ?? []);
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (inputValue < 2) {
      setIsErrorMessage(true);
      return;
    }
    setIsErrorMessage(false);

    setTodos([
      ...todos,
      {
        name: inputValue,
        changed: false,
      },
    ]);

    setInputValue('');
  };

  return (<div>
    <h1>Todo List</h1>
    <form onSubmit={handleFormSubmit}>
      <input type="text" placeholder="Write todo" onChange={handleInputChange} value={inputValue}/>
      <button type="submit">send todo</button>
      {isErrorMessage ? <p className={styles.error}>Pole musi zawierać conajmniej 2 znaki</p> : null}
    </form>
    <TodoList todoList={ todos }/>
  </div>);
};

export default App;
