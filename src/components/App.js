import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import styles from './App.module.css';

function App({
               HomePage = () => 'home'
             }) {
  return (
    <Router>
      <div className="container">
        <div className={styles.header}>
          [ <Link to="/">News</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> ]
        </div>

        <Switch>
          <Route path="/about">
            About page...
          </Route>
          <Route path="/contact">
            Contact page...
          </Route>
          <Route path="/">
            <div className="row">
              <div className="col">
                <HomePage />
              </div>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
