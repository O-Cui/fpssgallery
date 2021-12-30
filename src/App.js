//POWERRRRRRRR

import React, {useState} from 'react';
import './App.css';
import SearchBar from './Components/SearchBar.js';
import VideoPlayer from './Components/VideoPlayer.js';
import Data from "./Data.json";
function App() {
  const [timeStamp, getTimeStamp] = useState(30);
  
  return (

  <div className="App">
      <div className="Header">
        <h1> Fleetwood Park Grade 8 Gallery</h1>
      </div>
    
    <SearchBar placeholder="Enter a name" data={Data} getTimeStamp={getTimeStamp}/>
    <VideoPlayer link={"https://www.youtube.com/watch?v=2uMc3rNnTo4"} timeStamp={timeStamp}/>

  </div>
  );
}

export default App;
