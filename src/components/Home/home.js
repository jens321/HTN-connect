import React, { Component } from 'react';
import './home.css';

import Signup from '../Signup/signup';

class Home extends Component {
  render() {
    return (
      <div className="container-fluid home-container">
        <h1>PonderPal</h1>
        <Signup></Signup>
      </div>
    );
  }
}

export default Home;