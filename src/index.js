import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import './index.css';
import App from './App';

const render = !!window.__SSR__ ? ReactDOM.hydrate : ReactDOM.render;

Loadable.preloadReady().then(() => {
  render(<App />, document.getElementById('root'));
});
