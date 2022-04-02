import React from 'react';

import styles from './TodoList.module.css';

const TodoList = (props) => {
  if (!Array.isArray(props.todoList) || props.todoList.length === 0) return null;

  return (
    <ul className={styles.list}>
      {
        props.todoList.map((todo) => <li key={todo.sid}>
        <input type="checkbox" checked={todo.checked} onChange={() => props.onFinish(todo.id)}/>
        <span className={todo.checked ? styles.completed : ''}>{todo.name}</span>
        <button onClick={() => props.onRemove(todo.id)}>X</button>
        </li>)
      }
    </ul>
  );
};

// walidacja propsow - prop-types
// https://www.npmjs.com/package/prop-types

// TodoList.propTypes = {
//   todoList: propTypes.Array,
// };

export default TodoList;
