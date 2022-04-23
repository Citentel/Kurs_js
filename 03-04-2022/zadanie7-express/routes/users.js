const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();
const fsp = fs.promises;

const readFile = (path = 'data/users.json', encode = 'utf8') => fsp.readFile(path, encode);
const writeFile = (data, path = 'data/users.json', encode = 'utf8') => fsp.writeFile(path, JSON.stringify(data), encode);

/* GET users listing. */
router.get('/', (req, res) => {
  readFile()
    .then((file) => {
      res.send(file);
    })
    .catch((error) => res.send(error.message));
});

router.get('/:id', (req, res) => {
  readFile()
    .then((file) => {
      const users = JSON.parse(file);
      return res.send(JSON.stringify(users.find((el) => el.id === req.params.id)));
    })
    .catch((error) => res.send(error.message));
});

router.post('/', (req, res) => {
  if (!req.body || typeof req.body.name !== 'string' || req.body.name.length === 0) {
    res.status(400).send('Bad request');
  }

  readFile()
    .then((file) => {
      const users = JSON.parse(file);
      const newUser = { ...req.body, ...{ id: uuidv4() } };
      return writeFile([...users, newUser]);
    })
    .then(() => res.send('Successfully created new user'))
    .catch((error) => res.send(error.message));
});

router.put('/:id', (req, res) => {
  if (!req.body || typeof req.body.name !== 'string' || req.body.name.length === 0) {
    res.status(400).send('Bad request');
  }

  readFile()
    .then((file) => {
      const users = JSON.parse(file);
      const indexOfUser = users.findIndex((user) => user.id === req.params.id);
      const updateUser = req.body;

      users[indexOfUser].name = updateUser.name;
      return writeFile(users);
    })
    .then(() => res.send('Successfully updated user'))
    .catch((error) => res.send(error.message));
});

router.delete('/:id', (req, res) => {
  readFile()
    .then((file) => {
      const users = JSON.parse(file);
      const newUsers = users.map((el) => el.id !== req.params.id);

      return writeFile(newUsers);
    })
    .then(() => res.send('removed successfully user'))
    .catch((error) => res.send(error.message));
});

module.exports = router;
