import React, { Component } from 'react';
import './App.css';
import DrumPad from './Components/DrumPad';
import sounds from './Components/soundBank';

class App extends Component {
  render() {
    return (
      <> 
        <h1 className="heading">Simple Drum Machine</h1>
        <div id="drum-machine" className="container">
          <div id="display" className="display">
            <h1>Play a key</h1>
            {sounds.map((sound, idx) => (
              <DrumPad text={sound.key} key={idx} audio={sound.mp3}/>
              ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
