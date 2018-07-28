import path from 'path';
import express from 'express';
import Loadable from 'react-loadable';

import renderer from './renderer';

const app = express();

app.use(
  express.static(path.resolve(__dirname, '..', 'build'), {
    index: false,
  })
);

app.get('*', renderer);

Loadable.preloadAll().then(() => {
  app.listen(4000);
});
