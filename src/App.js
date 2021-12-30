import React, {useState} from 'react';
import './App.css';
import SearchBar from './Components/SearchBar.js';
import VideoPlayer from './Components/VideoPlayer.js';
import Data from "./Data.json";
import { Dropdownthing} from './Components/Dropdownthing';
function App() {
  const [timeStamp, getTimeStamp] = useState(30);
  
  return (

  <div className="App">
      <div className="Header">
        <h1> Fleetwood Park Grade 8 Gallery</h1>
      </div>
    
      <div className='Search-Container'>
      <Dropdownthing />
      <SearchBar placeholder="Enter a name" data={Data} getTimeStamp={getTimeStamp}/>
    </ div>
    
    <VideoPlayer link={"https://www.youtube.com/watch?v=2uMc3rNnTo4"} timeStamp={timeStamp}/>

  </div>
  );
}

export default App;
