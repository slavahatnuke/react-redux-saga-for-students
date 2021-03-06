import React from 'react';
import App from '../components/App';
import { Provider } from 'react-redux';

import { store } from '../redux/store';

import HomePage from './HomePage';
import HooksPage from '../components/HooksPage';

export default function AppContainer() {

  return (
    <Provider store={store}>
      <App HomePage={HomePage} HooksPage={HooksPage} />
    </Provider>
  )
}