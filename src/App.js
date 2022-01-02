//POWERRRRRRRR

import React, {useState, useEffect} from 'react';
import './App.css';
import SearchBar from './Components/SearchBar.js';
import VideoPlayer from './Components/VideoPlayer.js';
import Data from "./Data.json";   
import Dropdownthing from "./Components/Dropdownthing.js";
import Years from "./Years.json";
function App() {
  const [timeStamp, getTimeStamp] = useState(30);
  const [yearLink, getYearLink] = useState("");
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  //Paralax background
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);  
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  useEffect(() => {
    {Years.map((value, key) => {
      if (value.year == window.location.pathname){
        getYearLink(value.link)
      }
      })}
 }) 
  return (
   
  <div className="App"> 
      <div className="Background" style={{transform: `translateY(-${offsetY * 0.5}px)`}}>
        <img src="./background.jpg" alt="" />
      </div>
      <div className="Dragon">
        <img src="./teal dragon.jpg" alt="" />
      </div>
      <div className="Header"style={{transform: `translateY(-${offsetY * 0.1  }px)`}}> 
        <h1> Fleetwood Park Grade 8 Gallery</h1> 
      </div>

      <div className='Search-Container'style={{transform: `translateY(-${offsetY * 0.9  }px)`}} >
        <Dropdownthing getYearLink={getYearLink}/>
        <SearchBar placeholder="Enter a name" data={Data} getTimeStamp={getTimeStamp}/>
      </div>
    <div style={{transform: `translateY(-${offsetY * 1.5  }px)`}}>
    <VideoPlayer link={yearLink} timeStamp={timeStamp}/>
    </div>
  </div>

  );
}

export default App;
