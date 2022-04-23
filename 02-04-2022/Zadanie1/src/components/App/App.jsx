import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import {
  getElements, addElement, removeElement, updateElement,
} from '../DataBase/DataBase';
import TodoList from '../TodoList/TodoList.jsx';
import Alert from '../Alert/Alert';

import styles from './App.module.css';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [isErrorMessage, setIsErrorMessage] = useState(false);

  useEffect(() => {
    getElements()
      .then((response) => {
        console.log(response.json());
      })
      .catch((error) => {
        console.log(error);
        setTodos([]);
        return Alert('error', error.message ?? 'Something went wrong');
      });
  }, []);

  const saveTodos = (todosToSave) => {
    setTodos(todosToSave);
    localStorage.setItem('todos', JSON.stringify(todosToSave));
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // walidacja
    if (inputValue.length < 2) {
      setIsErrorMessage(true);
      Alert('error', 'Field must contain at least 2 characters');
      return;
    }

    const newTodo = {
      sid: uuidv4(),
      name: inputValue,
      checked: false,
    };

    addElement(JSON.stringify(newTodo))
      .then((response) => response.json())
      .then((data) => {
        setTodos([
          ...todos,
          data,
        ]);
        Alert('success', 'Element added successfully');
      })
      .catch((error) => Alert('error', error.message ?? 'Something went wrong'));

    setInputValue('');
  };

  const handleTaskFinished = (id) => {
    // updateElement(id)

    const indexOfChangedElement = todos.findIndex((todo) => todo.id === id);
    const changedTodos = [...todos];
    changedTodos[indexOfChangedElement].checked = !changedTodos[indexOfChangedElement].checked;

    updateElement(id, JSON.stringify(changedTodos[indexOfChangedElement]))
      .then(() => {
        saveTodos(changedTodos);
        Alert('success', 'Element changed successfully');
      })
      .catch((error) => Alert('error', error.message ?? 'Something went wrong'));
  };

  const handleRemove = (id) => {
    removeElement(id)
      .then(() => {
        const filteredTodos = todos.filter((todo) => todo.id !== id);
        setTodos(filteredTodos);
        Alert('success', 'Element removed successfully');
      })
      .catch((error) => Alert('error', error.message ?? 'Something went wrong'));
  };

  return (<div>
  <h1>Todo list</h1>
  <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Write todo" value={inputValue} onChange={handleInputChange}/>
    <button type="submit">send todo</button>
    {isErrorMessage ? <p className={styles.error}>Za malo znaków. Minimum 3</p> : null}
  </form>
  <TodoList todoList={todos} onRemove={handleRemove} onFinish={handleTaskFinished}/>
</div>);
};

export default App;
