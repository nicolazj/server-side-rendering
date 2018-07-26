import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { unregister } from './registerServiceWorker';

const render = !!window.__SSR__ ? ReactDOM.hydrate : ReactDOM.render;

render(<App />, document.getElementById('root'));

unregister();
