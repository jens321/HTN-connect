import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Connect extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link to="/ponder-room">Enter the ponder room!</Link>
    );
  }
}

export default Connect; 