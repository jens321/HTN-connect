import React, { Component } from 'react';
import * as firebase from 'firebase';
import { FirebaseConfig } from '../../config/keys';
firebase.initializeApp(FirebaseConfig);

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
      <form onSubmit={this.handleSubmit}>
        <label>Email: </label><input type="email" name="email" onChange={this.handleEmailChange} />
        <label>Password: </label><input type="password" name="password" onChange={this.handlePasswordChange} />
        <input type="submit" value="submit" />
      </form>
    )
  }
}

export default Signup; 