import React from 'react';
import App from '../components/App';
import { Provider } from 'react-redux';

import { store } from './redux/store';

import HomePage from '../components/HomePage';
import Loading from '../components/Loading';
import News from '../components/News';

export default function AppContainer() {
  const homePage = () => <HomePage
    Button={() => 'btn'}
    Loading={() => <Loading loading={true} />}
    News={() => <News />}
  />;

  return (
    <Provider store={store}>
      <App HomePage={homePage} />
    </Provider>
  )
}