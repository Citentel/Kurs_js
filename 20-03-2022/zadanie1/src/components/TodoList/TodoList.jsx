import React, { useState, useEffect } from 'react';
import styles from './TodoList.module.css';

const TodoList = ({ todoList }) => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) ?? []);

  useEffect(() => {
    setTodos(todoList);
  }, [todoList]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleClick = (e) => {
    if (e.target.dataset.type === 'check') {
      e.currentTarget.classList.toggle(styles.check);
      const newTodos = todos.map((todo) => {
        if (todo.name === e.target.dataset.name) {
          todo.changed = !todo.changed;
        }
        return todo;
      });

      setTodos(newTodos);
    }
  };

  if (todos.length === 0) {
    return null;
  }

  return (
    <ul className={styles.todoList}>
      {
        todos.map((todo, index) => (
          <li key={index} className={todo.changed ? styles.check : ''} onClick={handleClick}>
            <input data-type="check" type="checkbox" data-name={todo.name} checked={todo.changed}/>
            {todo.name}
          </li>
        ))
      }
    </ul>
  );
};

export default TodoList;
