import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import styles from './App.module.css';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className={styles.border}>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/1">Page 1</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/1">
            page 1
          </Route>
          <Route path="/">
            <div className="row">
              <div className="col">
                home
              </div>
            </div>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
