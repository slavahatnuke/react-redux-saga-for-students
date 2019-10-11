import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import styles from './App.module.scss';

function App({
               HomePage = () => 'home',
               HooksPage = () => 'hooks',
               ContactPage = () => 'contact'
             }) {
  return (
    <Router>
      <div className="container">
        <div className={styles.header}>
          [ <Link to="/">News</Link> | <Link to="/hooks">Hooks</Link> | <Link to="/contact">Contact</Link> ]
        </div>

        <Switch>
          <Route path="/hooks">
            <HooksPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
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
