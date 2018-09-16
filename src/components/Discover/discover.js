import React, { Component } from 'react';
import { firebase } from '../../config/firebase';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';
import './discover.css';

class Discover extends Component {
  constructor(props) {
    super(props);

    // this.handleSubmit = this.handleSubmit.bind(this);
    this.calculateScore = this.calculateScore.bind(this);
  }

  componentDidMount() { 

    // loop through entire user base
    firebase.database().ref('/users').once("value")
      .then((snapshot) => {
        let matches = [];
        let users = snapshot.val();
        let user = firebase.auth().currentUser;

        // get info for current user
        firebase.database().ref('/users/' + user.uid).once("value")
          .then(snapshot => {
            this.user = snapshot.val();
            for (let id in users) {
              if (!users.hasOwnProperty(id) || user.uid === id) continue;
              matches.push(Object.assign({}, users[id], { id: id }));
            }
            matches.map(el => 
              Object.assign({}, el, { distance: this.calculateScore(this.user, el) })
            );

            matches.sort(this.rankUser);
            console.log(matches); 
          })
          .catch(error => {
            console.log(error);
          })
      })
  }

  rankUser(a, b) {
    return a.distance > b.distance; 
  }

  calculateScore(currUser, otherUser) {
    let distance = 0;
    for (let key in currUser) {
      if (!currUser.hasOwnProperty(key)) continue; 

      if (key === "language" && currUser[key] !== otherUser[key]) {
        distance = -1;
        break;
      }

      // age
      if (key === "age") {
        distance += Math.abs(currUser[key] - otherUser[key])/84;
        continue;
      }

      // politics
      if (key === "politics") {
        distance += Math.abs(currUser[key] - otherUser[key])/100;
        continue;
      }

      distance += (currUser[key] === otherUser[key]) ? 0 : 1;
    }
    return distance; 
  }

  render() {
    return(
      <div>
        <Container>
          <Row className='discoverButton'>
            <Col md={{ size: 1, offset: 4 }}> 
              <Button id="skipButton" outline color="danger">Skip</Button>{''}
            </Col>
            <Col md={{ size: 1, offset: 1 }}>
              <Button id="connectButton" outline color="primary">Connect</Button>
            </Col>
          </Row>

        
          <Row className='discoverRow'>
            <Col>
              Country: 
            </Col>
            <Col>
              Language:
            </Col>
        
          </Row>
          <Row className='discoverRow'>
            <Col>
              Region:
            </Col>
            <Col>
              Age:
            </Col>
          </Row>

          <Row className='discoverRow'>
            <Col>
              Political Spectrum:
            </Col>
            <Col>
              Gender:
            </Col>
          </Row>

          <Row className='discoverRow'>
            <Col>
              Socioeconomic Group:
            </Col>
            <Col>
              Religion:
            </Col>
          </Row>
          
        </Container>
        

      </div>
    );
  }
}

export default Discover; 