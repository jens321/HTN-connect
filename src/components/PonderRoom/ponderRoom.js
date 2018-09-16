import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';  
import './ponderRoom.css';

class PonderRoom extends Component {
  constructor(props) {
    super(props)
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

        {/* INSERT FORM HERE */}
      </Container>
    );
  }
}

export default PonderRoom;