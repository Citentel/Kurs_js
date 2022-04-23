import express from 'express';
import fs from 'fs';

const app = express();
const port = 3000;
const fsp = fs.promises;

app.get('/', (req, res) => {
  fsp.readFile('./data/hello.txt', 'utf8')
    .then((file) => fsp.writeFile('./data/hello2.txt', file, 'utf8'))
    .then(() => {
      console.log('success');
    })
    .catch((error) => {
      console.error(error);
    });

  res.send('Hello fell of potato (づ｡◕‿‿◕｡)づ');
});

app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});
