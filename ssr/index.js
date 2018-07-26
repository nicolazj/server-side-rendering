import path from 'path';
import express from 'express';
import renderer from './renderer';

const app = express();

app.use(
  express.static(path.resolve(__dirname, '..', 'build'), {
    index: false,
  })
);

app.get('*', renderer);

app.listen(4000);
