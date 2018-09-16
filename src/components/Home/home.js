import React, { Component } from 'react';
import './home.css';

import Signup from '../Signup/signup';

class Home extends Component {
  render() {
    return (
      <div className="container-fluid home-container">
        <h1 className="logo-title"><img src="/img/ponderpal_transparent.png" id="logo" /> PonderPal</h1>
        <Signup></Signup>
      </div>
    );
  }
}

export default Home;