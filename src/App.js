import React, { Component } from 'react';
import logo from './logo.svg';
import { Switch, Route } from 'react-router';

import Signup from './components/Signup/signup';
import Home from './components/Home/home';
import Dashboard from './components/Dashboard/dashboard';
import PonderRoom from './components/PonderRoom/ponderRoom';
import './App.css';
import './scss/custom.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/ponder-room" component={PonderRoom} />
      </Switch>
    );
  }
}

export default App;
