import React, {useState} from 'react';
import './App.css';
import SearchBar from './Components/SearchBar.js';
import VideoPlayer from './Components/VideoPlayer.js';
import Data from "./Data.json";
import Dropdown from "./Components/Dropdown.js";
function App() {
  const [linkValue, getLinkValue] = useState("https://www.youtube.com/watch?v=dJ0Xcu0vJNU");
  
  return (

  <div className="App">
      <div className="Header">
        <h1> Fleetwood Park Grade 8 Gallery</h1>
      </div>
    
    <SearchBar placeholder="Enter a name" data={Data} getLinkValue={getLinkValue}/>
    <VideoPlayer link={linkValue}/>

  </div>
  );
}

export default App;
