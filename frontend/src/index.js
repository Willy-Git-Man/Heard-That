import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ModalProvider } from "./context/Modal";
import configureStore from './store';
import { restoreCSRF, csrfFetch } from './store/csrf';

import './index.css';

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
}
function Root() {
  return (
    <Provider store={store}>
      <ModalProvider>

      <BrowserRouter>
        <App  />
      </BrowserRouter>

      </ModalProvider>

    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root'),
);
