import React from "react";

import { connect } from 'react-redux';
import { Button } from 'reactstrap';

import HomePage from '../components/HomePage';

import Loading from '../components/Loading';
import News from '../components/News';

import { getNews } from '../actions';

const IButton = connect(null, {
  getNews
})(({ getNews }) => <Button onClick={getNews}>LOAD NEWS</Button>);

const ILoading = connect(({ loading }) => ({
  loading
}))(Loading);

const INews = connect(({ articles }) => ({
  articles
}))(News);

export default function HomePageContainer() {
  return (<HomePage
    Button={IButton}
    Loading={ILoading}
    News={INews}
  />)
}