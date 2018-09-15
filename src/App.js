import React, { Component } from 'react';
import logo from './logo.svg';
import { Switch, Route } from 'react-router';

import Signup from './components/Signup/signup';
import Home from './components/Home/home';
import Dashboard from './components/Dashboard/dashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    );
  }
}

export default App;
