import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './discover.css';

class Discover extends Component {
  constructor(props) {
    super(props);

    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleSubmit = (event) => {
    
  // }

  render() {
    return(
      <div>
        <FormGroup>
          <Label className="profile" for="textOutput">Profile</Label>
          <Input type="textarea" name="text" id="textOutput" />
        </FormGroup>
      </div>
    );
  }
}

export default Discover; 