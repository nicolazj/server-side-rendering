import fs from 'fs';
import path from 'path';
import React from 'react';
import { StaticRouter } from 'react-router';
import { renderToNodeStream } from 'react-dom/server';

import Routes from '../src/Routes';

const html = fs.readFileSync(path.resolve(__dirname, '..', 'build', 'index.html'), 'utf8');
const [before, after] = html.split('@');

export default (req, res) => {
  console.log('renderer====');

  let routerContext = {};

  const frontend = (
    <StaticRouter location={req.url} context={routerContext}>
      <Routes />
    </StaticRouter>
  );

  res.write(before);
  res.write(`
  <script>
    window.__SSR__ = true;
  </script>
  `);
  const stream = renderToNodeStream(frontend);
  stream.pipe(
    res,
    { end: false }
  );

  stream.on('end', () => res.end(after));
};
