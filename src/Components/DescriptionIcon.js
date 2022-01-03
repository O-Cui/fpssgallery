import React, {useState} from 'react';
import dragon from "./teal dragon.png";
import "./DescriptionIcon.css";

function DescriptionIcon() {
    const [visible, setVisible] = useState(false);
    const showText = () => {
        console.log('in')
        setVisible(true)
    }
    const hideText=() => {
        setVisible(false)
        console.log('out')
    }
    return (
        
        <div className="Dragon">
            <img src={dragon} alt="" onMouseOver={() => showText()} onMouseOut={() =>hideText()} 
                width="100" height="100" style={{position: "absolute", bottom: 0, right: 50}}/>
            
            {visible == true &&(
                <div className="Description" style={{position: "absolute", bottom: 20, right: 170}}>
                    Made by the Fleetwood Park Programming Club
                </div>
            )}
        </div>
    )
}
export default DescriptionIcon;