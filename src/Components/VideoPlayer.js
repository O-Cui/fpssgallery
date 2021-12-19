import React from "react";
import ReactPlayer from "react-player";
import "./VideoPlayer.css";

{/* Video for youtube player: https://www.youtube.com/watch?v=7sDY4m8KNLc */}

function VideoPlayer({link}) {
    return (
        <div className="videoDisplay">
            <ReactPlayer controls url={link}/>
        </div>



    )
}
export default VideoPlayer;