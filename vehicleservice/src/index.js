import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

const el = document.getElementById('root');

const root = ReactDom.createRoot(el);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
