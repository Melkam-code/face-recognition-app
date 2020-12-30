import './App.css';
import React, { Component } from 'react'; 
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo';
import ImageLinkForm from './components/imagelinkform/imagelinkform';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <ImageLinkForm />
      </div>
    );
  }
}

export default App;
