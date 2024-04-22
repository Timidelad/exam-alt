/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>

    </div>
  );
}

export default App;
*/

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GitHubPortfolio from './GitHubPortfolio';
import SingleRepoPage from './SingleRepoPage';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={GitHubPortfolio} />
          <Route path="/repo/:repoId" component={SingleRepoPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

