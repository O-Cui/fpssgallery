import React, {useState, useEffect} from 'react';
import './App.css';
import Years from "./Years.json";
import Data from "./Data.json";   
import SearchBar from './Components/SearchBar.js';
import VideoPlayer from './Components/VideoPlayer.js';
import Dropdownthing from "./Components/Dropdownthing.js";
import DescriptionIcon from "./Components/DescriptionIcon.js";

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
        <img src="./background.jpeg" alt="" />
      </div>
      <DescriptionIcon/>
      <div className="Header"style={{transform: `translateY(${offsetY * 0.9 }px)`}}> 
        <h1> Fleetwood Park Grade 8 Gallery</h1> 
      </div>
      <div style={{transform: `translateY(${offsetY * 0.6  }px)`}}>
         <VideoPlayer link={yearLink} timeStamp={timeStamp}/>
      </div>
      <div className='Search-Container'style={{transform: `translateY(${offsetY * 0.8  }px)` }} >
        <Dropdownthing getYearLink={getYearLink}/>
        <SearchBar placeholder="Enter a name" data={Data} getTimeStamp={getTimeStamp} />
      </div>

  </div>

  );
}

export default App;
