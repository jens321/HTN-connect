import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';
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