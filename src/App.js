import './App.css';
import React, { Component } from 'react'; 
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo';
import ImageLinkForm from './components/imagelinkform/imagelinkform';
import Rank from './components/rank/rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

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
      input: ''
    }
  }

  onInputChange(event){
    console.log(event.target.value);
  }

  onSubmit(){
    console.log('clicked');
    app.models.predict(Clarifai.FACE_DETECT_MODEL, "https://samples.clarifai.com/puppy.jpeg")
    .then(function(response){
      console.log(response);
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
        
      </div>
    );
  }
}

export default App;
