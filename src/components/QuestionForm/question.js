import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Slider from 'react-rangeslider'
//including the default styles
import 'react-rangeslider/lib/index.css'
import './question.css';
import { firebase } from '../../config/firebase';

class Question extends Component {
  constructor(props) {
    super(props)

    this.state = {
    country:"",
    languages:"",
    neighbourhood:"",
    age:"", //This is supposed to be the value for the age slider
    politics:""
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


  ageChange = value => {
    this.setState({
      age: value
      
    })
    console.log(value)
  };

  politicsChange = value => {
    this.setState({
      politics: value
    })
    console.log(value)
  }
  render() {
    const { age, politics } = this.state

    const horizontalLabels = {
      0: 'The Left',
      50: 'Centre',
      100: 'The Right',
    }
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

        <FormGroup>
        <Label for="age">How old are you in years?</Label>
        <div className='slider'>
        <Slider
          min={16}
          max={100}
          value={age}
          onChangeStart={this.ageChangeStart}
          onChange={this.ageChange}
          onChangeComplete={this.ageChangeComplete}
        />
        </div>
        </FormGroup>

        <FormGroup>
        <Label for="politics">Where would you say you fit in the political spectrum?</Label>
        <div className='slider'>
        <Slider
          min={0}
          max={100}
          value={politics}
          labels={horizontalLabels}
          onChangeStart={this.politicsChangeStart}
          onChange={this.politicsChange}
          onChangeComplete={this.politicsChangeComplete}
        />
        </div>
        </FormGroup>
        <FormGroup>
        <Label for="gender">
          What gender do you identify as?</Label>
          <Input type="select" name="gender" id="gender">
          <option>prefer not to say</option>
          <option>female</option>
          <option>male</option>
          <option>other</option>
          </Input>
        </FormGroup>

        <FormGroup>
        <Label for="economic">
          What socioeconomic group would you say you belong to?</Label>
          <Input type="select" name="gender" id="gender">
          <option>Middle class</option>
          <option>Lower middle class</option>
          <option>Upper middle class</option>
          <option>Below the poverty line</option>
          <option>Upper class</option>
          </Input>
        </FormGroup>

        <FormGroup>
        <Label for="faith">
          And lastly, what are your religious affliations?</Label>
          <Input type="select" name="faith" id="faith">
          <option>Theist</option>
          <option>Atheist</option>
          <option>Agnostic</option>
          <option>Something entirely else</option>
          </Input>
        </FormGroup>
      </Form>
    );
  }
}

export default Question; 