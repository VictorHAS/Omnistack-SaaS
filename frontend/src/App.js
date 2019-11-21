import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import store from './store';
import Routes from './routes';

import GlobalStyle from './styles/global';

export default function src() {
  return (
    <Provider store={store}>
      <>
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </>
    </Provider>
  );
}
