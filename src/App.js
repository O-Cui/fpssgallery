import React, {useState} from 'react';
import './App.css';
import SearchBar from './Components/SearchBar.js';
import VideoPlayer from './Components/VideoPlayer.js';
import Data from "./Data.json";
<<<<<<< HEAD
import { Dropdownthing } from './Components/Dropdownthing';

=======
>>>>>>> be5a1445733a3493361bb922f524b2eaecdca128
function App() {
  const [timeStamp, getTimeStamp] = useState(30);
  
  return (

  <div className="App">
      <div className="Header">
        <h1> Fleetwood Park Grade 8 Gallery</h1>
      </div>
    
<<<<<<< HEAD
    <div className='Search-Container'>
      <Dropdownthing />
      <SearchBar placeholder="Enter a name" data={Data} getLinkValue={getLinkValue}/>
    </ div>
    <VideoPlayer link={linkValue}/>
    
=======
    <SearchBar placeholder="Enter a name" data={Data} getTimeStamp={getTimeStamp}/>
    <VideoPlayer link={"https://www.youtube.com/watch?v=2uMc3rNnTo4"} timeStamp={timeStamp}/>

>>>>>>> be5a1445733a3493361bb922f524b2eaecdca128
  </div>
  );
}

export default App;
