import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import './ponderRoom.css';
import { firebase } from '../../config/firebase';

class PonderRoom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      introText:"",
      bodyText:"",
      conclusionText:"",
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onIntroChange = this.onIntroChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onConclusionChange = this.onConclusionChange.bind(this);
  }

  onIntroChange = (e) => { {/* please check all firebase-related items*/}
    this.setState({
      introText: e.target.value
    })
  }

  onBodyChange = (e) => { {/* please check all firebase-related items*/}
  this.setState({
    bodyText: e.target.value
  })
}

onConclusionChange = (e) => { {/* please check all firebase-related items*/}
this.setState({
  conclusionText: e.target.value
})
}

handleSubmit = (e) => { {/* please check all firebase-related items*/}
    let user = firebase.auth().currentUser;
    let uid = user.uid; 

    firebase.database().ref('users/' + uid + '/letters' + {/* other ID*/}).set({
      introText: this.state.introText,
      bodyText: this.state.bodyText,
      conclusionText: this.state.bodyText

    })
  }

  render() {
    return(
      <Container>
        <Row>
          <Col md='12'>
            <h1 className='text-center'><img src="/img/ponderpal_transparent.png" id="logo-dashboard" />PonderPal</h1>
          </Col>
        </Row>
        <Row>
          <Col md='12'>
            <h2>Welcome to the Ponder Room!</h2>
            <hr id="ponder-line"/>
          </Col>
        </Row>
        <Row>
          <Col md='12'>
          <Form>
            <FormGroup>
            <h4>Introduction</h4>
            <Input type="textarea" name="intro" id="intro"/> {/* autogrow please*/}
            </FormGroup>
            <FormGroup>
              <h4>Body</h4>
           
            <Input type="textarea" name="body" id="body"/> {/* autogrow please*/}
            </FormGroup>
            <FormGroup>
            <h4>Conclusion</h4>
           
            <Input type="textarea" name="conclusion" id="conc"/> {/* autogrow please*/}
            </FormGroup>
          <Button>Submit</Button>
          </Form>
          </Col>
        </Row>


        {/* INSERT FORM HERE */}
      </Container>
    );
  }
}

export default PonderRoom;