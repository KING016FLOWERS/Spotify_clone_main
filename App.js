import './App.css';
import React from 'react';
import Left  from './Components/Left.js';
import Library  from './Components/Library';
import MusicPlayer from './Components/MusicPlayer.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <div className="App">
      <Left/>
      <Library/>
      <MusicPlayer/>
      
      
    </div>
  );
}

export default App;
