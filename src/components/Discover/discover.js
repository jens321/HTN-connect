import React, { Component } from 'react';
import { firebase } from '../../config/firebase';

class Discover extends Component {
  constructor(props) {
    super(props);

    // this.handleSubmit = this.handleSubmit.bind(this);
    this.calculateScore = this.calculateScore.bind(this);
  }

  componentDidMount() {
    firebase.database().ref('/users').once("value")
      .then((snapshot) => {
        let matches = [];
        let users = snapshot.val();
        for (let id in users) {
          if (!users.hasOwnProperty(id)) continue;
          if (id === uid) this.user = users[id];

          matches.push(Object.assign({}, users[id], { id: id }));
        }
        matches.map(el => 
          Object.assign({}, el, { proximity: this.calculateScore(this.user, el) })
        );
      })
  }

  calculateScore(currUser, otherUser) {
    console.log('current: ', currUser);
    console.log('Other: ', otherUser);
  }

  render() {
    return(
      <div>
        <h4>Discovery tab</h4>
      </div>
    );
  }
}

export default Discover; 