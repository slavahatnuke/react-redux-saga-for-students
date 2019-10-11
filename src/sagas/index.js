import { put, takeLatest, all } from 'redux-saga/effects';

import { GET_NEWS, NEWS_RECEIVED } from '../types';
import { receivedNews } from '../actions';

function* fetchNews() {
  const response = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
  const json = yield response.json();
  const { articles } = json;

  yield put(receivedNews({ articles }));
}

function* actionWatcher() {
  yield takeLatest(GET_NEWS, fetchNews)
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}