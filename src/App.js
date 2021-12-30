import React, {useState} from 'react';
import './App.css';
import SearchBar from './Components/SearchBar.js';
import VideoPlayer from './Components/VideoPlayer.js';
import Data from "./Data.json";
import { Dropdownthing } from './Components/Dropdownthing';

function App() {
  const [linkValue, getLinkValue] = useState("https://www.youtube.com/watch?v=dJ0Xcu0vJNU");
  
  return (

  <div className="App">
      <div className="Header">
        <h1> Fleetwood Park Grade 8 Gallery</h1>
      </div>
    
    <div className='Search-Container'>
      <Dropdownthing />
      <SearchBar placeholder="Enter a name" data={Data} getLinkValue={getLinkValue}/>
    </ div>
    <VideoPlayer link={linkValue}/>
    
  </div>
  );
}

export default App;
