import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Row, Col, Button } from 'reactstrap';
import './signup.css';
import { firebase } from '../../config/firebase';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        console.log('successful login!');
        window.location = '/dashboard';
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <Row className="signup-container">
        <Col md="3">
          <h2>Signup</h2>
          <hr />
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="email address" onChange={this.handleEmailChange} />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" placeholder="your password here" onChange={this.handlePasswordChange} />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Col>
      </Row>
    )
  }
}

export default Signup; 