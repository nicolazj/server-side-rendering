import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Home from './Home';
import List from './List';

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/list"> List </Link>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/list" exact component={List} />
        </Switch>
      </div>
    );
  }
}

export default App;
