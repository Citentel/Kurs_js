const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();
const fsp = fs.promises;

const readFile = (path = 'data/todos.json', encode = 'utf8') => fsp.readFile(path, encode);
const writeFile = (data, path = 'data/todos.json', encode = 'utf8') => fsp.writeFile(path, JSON.stringify(data), encode);
const genResponse = (res, status, data = '') => res.status(status).send(data);

/* GET users listing. */
router.get('/', (req, res) => {
  readFile()
    .then((file) => {
      genResponse(res, 200, file);
    })
    .catch(() => genResponse(res, 500, 'Something bad happened'));
});

router.post('/', (req, res) => {
  if (!req.body || !('name' in req.body) || typeof req.body.name !== 'string' || req.body.name.length === 0) {
    genResponse(res, 400, 'Something bad happened');
  }

  const newTodo = {
    id: uuidv4(),
    name: req.body.name,
    changed: false,
  };

  readFile()
    .then((file) => {
      const todos = JSON.parse(file);
      return writeFile([...todos, newTodo]);
    })
    .then(() => genResponse(res, 200, newTodo))
    .catch(() => {
      genResponse(res, 500, 'Something bad happened');
    });
});

router.put('/:id', (req, res) => {
  if (!req.body || !('changed' in req.body) || typeof req.body.changed !== 'boolean') {
    genResponse(res, 400, 'Something bad happened');
  }

  readFile()
    .then((file) => {
      const todos = JSON.parse(file);
      const indexOfTodo = todos.findIndex((todo) => todo.id === req.params.id);
      todos[indexOfTodo].changed = req.body.changed;
      return writeFile(todos);
    })
    .then(() => genResponse(res, 200, 'OK'))
    .catch(() => {
      genResponse(res, 500, 'Something bad happened');
    });
});

router.delete('/:id', (req, res) => {
  readFile()
    .then((file) => {
      const todos = JSON.parse(file);
      const mappedTodos = todos.filter((todo) => todo.id !== req.params.id);
      return writeFile(mappedTodos);
    })
    .then(() => genResponse(res, 200, 'OK'))
    .catch(() => {
      genResponse(res, 500, 'Something bad happened');
    });
});

module.exports = router;
