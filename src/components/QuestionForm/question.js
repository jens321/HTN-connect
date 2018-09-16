import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';
import './question.css';
import { firebase } from '../../config/firebase';

class Question extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // add as many attributes here to store the answers for the question
      name: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
  }

  onNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = (e) => {
    let user = firebase.auth().currentUser;
    let uid = user.uid; 

    firebase.database().ref('users/' + uid).set({
      name: this.state.name
    })
  }

  render() {
    return(
      <Form>
        <FormGroup>
          <Label>Name:</Label><Input type="text" name="name" onChange={this.onNameChange} />
          <Button onClick={this.handleSubmit}>Submit</Button>
        </FormGroup>
      </Form>
    );
  }
}

export default Question; 