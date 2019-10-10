import { put, takeLatest, all } from 'redux-saga/effects';

import { GET_NEWS, NEWS_RECEIVED } from '../types';

function* fetchNews() {
  const response = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
  const json = yield response.json();

  yield put({
    type: NEWS_RECEIVED,
    articles: json.articles,
  });
}

function* actionWatcher() {
  yield takeLatest(GET_NEWS, fetchNews)
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}