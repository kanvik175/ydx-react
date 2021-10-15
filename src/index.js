import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Page from './components/Page/Page';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider context={{}}>
        <Page />
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);