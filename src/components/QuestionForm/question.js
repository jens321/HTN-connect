import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Slider from 'react-rangeslider'
import './question.css';

class Question extends Component {
  constructor(props) {
    super(props)

    this.state = {
    country:"",
    languages:"",
    neighbourhood:"",
    }
  }

  render() {
    return(
      <Form>
        <FormGroup>
        <Label for="languages">
          What language are you most comfortable communicating in (text AND voice)?</Label>
          <Input type="select" name="languages" id="languages">
          <option>English</option>
          <option>French</option>
          <option>Flemish</option>
          <option>Korean</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="country">
          Which country did you mainly spend your childhood (ages 3-13) in?</Label>
          <Input type="select" name="country" id="country">
          <option>Belgium</option>
          <option>Canada</option>
          <option>United States of America</option>
          <option>China</option>
          </Input>
        </FormGroup>
        <FormGroup>
        <Label for="neighbourhood">
          What type of region was that in?</Label>
          <Input type="select" name="neighbourhood" id="neighbourhood">
          <option>Suburbs</option>
          <option>City</option>
          <option>Pretty isolated</option>
          <option>A mix of everything</option>
          </Input>
        </FormGroup>
      </Form>
    );
  }
}

export default Question; 