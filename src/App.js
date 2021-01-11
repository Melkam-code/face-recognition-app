import './App.css';
import React, { Component } from 'react'; 
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo';
import ImageLinkForm from './components/imagelinkform/imagelinkform';
import Rank from './components/rank/rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/facerecognition/facerecognition';
import Signin from './components/signin/signin';
import Register from './components/register/register';

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
      imageURL: '',
      box: {},
      route: 'signin',
      isSignedIn: false
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.displayFaceBox = this.displayFaceBox.bind(this);
    this.calculateFaceLocation = this.calculateFaceLocation.bind(this);
    this.onRouteChange = this.onRouteChange.bind(this);
  }

  onInputChange(event){
    const val = event.target.value
    this.setState({
      input: val
    });
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    /* there is an issue with the left and right columns, they are wide and I don't know how to debug this shit! */
    return{
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({ box: box });
  }

  onSubmit(){
    this.setState({
      imageURL: this.state.input
    })
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({ isSignedIn: false })
    } else if (route === 'home'){
      this.setState({ isSignedIn: true })
    }
    this.setState({
      route: route
    })
  }

  render(){
    const { isSignedIn, imageURL, route, box } = this.state;

    return (
      <div className="App">
       <Particles className='particles' params={particleOptions} />
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} />
        { route === 'home' 
        ? <div><Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
        <FaceRecognition imageURL={imageURL} box={box} />
        </div>
        : (
          route === 'signin' ? <Signin onRouteChange={this.onRouteChange} />
          : <Register onRouteChange={this.onRouteChange} />
        )
      }
      </div>
    );
  }
}

export default App;
