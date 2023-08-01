import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.scss';
import { Store } from './Store/Store.js';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);

