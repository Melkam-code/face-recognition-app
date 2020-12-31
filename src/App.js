import './App.css';
import React, { Component } from 'react'; 
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo';
import ImageLinkForm from './components/imagelinkform/imagelinkform';
import Rank from './components/rank/rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/facerecognition/facerecognition';

const particleOptions = {
  particles: {
    number: {
      value:100,
      density: {
        enable: true,
        value_area: 800
      }
    }
}
}

const app = new Clarifai.App({
  apiKey: "491ffe039b8341c3b0c42579a270cb60"
 });

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: '',
      imageURL: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(event){
    const val = event.target.value
    this.setState({
      input: val
    });
  }

  onSubmit(){
    this.setState({
      imageURL: this.state.input
    })
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(function(response){
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
    },
    function(err){
      console.log(err);
    }
    );
  }

  render(){
    return (
      <div className="App">
       <Particles className='particles' params={particleOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
        <FaceRecognition imageURL={this.state.imageURL} />
      </div>
    );
  }
}

export default App;
