import './App.css';
import React, { Component } from 'react'; 
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo';
import ImageLinkForm from './components/imagelinkform/imagelinkform';
import Rank from './components/rank/rank';
import Particles from 'react-particles-js';

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

class App extends Component {
  render(){
    return (
      <div className="App">
       <Particles className='particles' params={particleOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        
      </div>
    );
  }
}

export default App;
