import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Slider from 'react-rangeslider';
//including the default styles
import 'react-rangeslider/lib/index.css';
import './question.css';
import { firebase } from '../../config/firebase';

class Question extends Component {
  constructor(props) {
    super(props)

    this.state = {
      language: "English",
      country: "Belgium",
      neighbourhood: "Suburbs",
      age: 16, //This is supposed to be the value for the age slider
      politics: 0,
      gender: "prefer not to say",
      socioeconomic: "Middle class",
      religion: "Theist"
    }
    
    this.onLanguageChange = this.onLanguageChange.bind(this);
    this.onCountryChange = this.onCountryChange.bind(this);
    this.onRegionChange = this.onRegionChange.bind(this);
    this.onAgeChange = this.onAgeChange.bind(this);
    this.onPoliticsChange = this.onPoliticsChange.bind(this);
    this.onGenderChange = this.onGenderChange.bind(this);
    this.onSocioChange = this.onSocioChange.bind(this);
    this.onReligionChange = this.onReligionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onLanguageChange = (e) => {
    console.log(e.target.value);
    this.setState({
      language: e.target.value
    });
  }

  onCountryChange = (e) => {
    console.log(e.target.value);
    this.setState({
      country: e.target.value
    })
  }

  onRegionChange = (e) => {
    console.log(e.target.value);
    this.setState({
      neighbourhood: e.target.value
    });
  }

  onAgeChange = (age) => {
    this.setState({
      age: age
    });
    console.log(age);
  };

  onPoliticsChange = (politics) => {
    this.setState({
      politics: politics
    });
    console.log(politics);
  }

  onGenderChange = (e) => {
    this.setState({
      gender: e.target.value
    });
    console.log(e.target.value);
  }

  onSocioChange = (e) => {
    this.setState({
      socioeconomic: e.target.value
    });
    console.log(e.target.value);
  }

  onReligionChange = (e) => {
    this.setState({
      religion: e.target.value
    });
    console.log(e.target.value);
  }

  handleSubmit = (e) => {
    let user = firebase.auth().currentUser;
    let uid = user.uid; 

    firebase.database().ref('users/' + uid).set({
      language: this.state.language,
      country: this.state.country,
      neighbourhood: this.state.neighbourhood,
      age: this.state.age,
      politics: this.state.politics,
      gender: this.state.gender,
      socioeconomic: this.state.socioeconomic,
      religion: this.state.religion
    })
      .then(result => {
        console.log('cool!');
      })
      .catch(error => {
        console.log(error);
      })
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
          <Input type="select" name="languages" id="languages" onChange={this.onCountryChange}>
          <option>English</option>
          <option>French</option>
          <option>Flemish</option>
          <option>Korean</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="country">
          Which country did you mainly spend your childhood (ages 3-13) in?</Label>
          <Input type="select" name="country" id="country" onChange={this.onCountryChange}>
          <option>Belgium</option>
          <option>Canada</option>
          <option>United States of America</option>
          <option>China</option>
          </Input>
        </FormGroup>

        <FormGroup>
        <Label for="neighbourhood">
          What type of region was that in?</Label>
          <Input type="select" name="neighbourhood" id="neighbourhood" onChange={this.onRegionChange}>
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
          onChange={this.onAgeChange}
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
          onChange={this.onPoliticsChange}
          onChangeComplete={this.politicsChangeComplete}
        />
        </div>
        </FormGroup>
        <FormGroup>
        <Label for="gender">
          What gender do you identify as?</Label>
          <Input type="select" name="gender" id="gender" onChange={this.onGenderChange}>
          <option>prefer not to say</option>
          <option>female</option>
          <option>male</option>
          <option>other</option>
          </Input>
        </FormGroup>

        <FormGroup>
        <Label for="economic">
          What socioeconomic group would you say you belong to?</Label>
          <Input type="select" name="economic" id="economic" onChange={this.onSocioChange}>
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
          <Input type="select" name="faith" id="faith" onChange={this.onReligionChange}>
          <option>Theist</option>
          <option>Atheist</option>
          <option>Agnostic</option>
          <option>Something entirely else</option>
          </Input>
        </FormGroup>
        <Button onClick={this.handleSubmit}>Save Changes</Button>
      </Form>
    );
  }
}

export default Question; 