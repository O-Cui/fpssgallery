
import React, {useState, useEffect} from 'react';
import ReactPlayer from "react-player";
import "./VideoPlayer.css";

{/* Video for youtube player: https://www.youtube.com/watch?v=7sDY4m8KNLc */}

function VideoPlayer({link, timeStamp}) {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
    //Paralax background
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);  
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return (
        <div className="videoDisplay">
            <ReactPlayer controls url={link + "&t=" + timeStamp} playing={true}/>
        </div>



    )
}
export default VideoPlayer;