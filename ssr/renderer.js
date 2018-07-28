import fs from 'fs';
import path from 'path';
import React from 'react';
import { StaticRouter } from 'react-router';
import { renderToNodeStream } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';

import Routes from '../src/Routes';
import stats from '../build/react-loadable.json';

const html = fs.readFileSync(path.resolve(__dirname, '..', 'build', 'index.html'), 'utf8');
const [before, after] = html.split('@');

export default (req, res) => {
  let routerContext = {};
  let modules = [];

  const report = moduleName => {
    modules.push(moduleName);
  };

  const sheet = new ServerStyleSheet();

  const frontend = sheet.collectStyles(
    <Loadable.Capture report={report}>
      <StaticRouter location={req.url} context={routerContext}>
        <Routes />
      </StaticRouter>
    </Loadable.Capture>
  );

  res.write(before);

  res.write(`
  <script>
    window.__SSR__ = true;
  </script>
  `);

  const stream = sheet.interleaveWithNodeStream(renderToNodeStream(frontend));

  stream.pipe(
    res,
    { end: false }
  );

  stream.on('end', () => {
    const bundles = getBundles(stats, modules);
    const scripts = bundles
      .map(bundle => bundle.file)
      .filter(file => !file.endsWith('.map'))
      .map(src => `<script src="${src}"> </script>`);
    res.end(after.replace('src="/static/js/manifest.js"></script>', m => m + scripts));
  });
};
