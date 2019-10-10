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
          [ <Link to="/">News</Link> | <Link to="/1">Page 1</Link> | <Link to="/2">Page 2</Link> ]
        </div>

        <Switch>
          <Route path="/1">
            Page 1
          </Route>
          <Route path="/2">
            Page 2
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
