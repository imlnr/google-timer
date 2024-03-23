import React, { useState } from 'react'
import '../styles/Home.css'
// import Mainroutes from '../allroutes/Mainroutes'
import Timer from '../pages/Timer';
import Stopwatch from '../pages/Stopwatch';
const Nav = () => {
    const [clickTimer, setClickTimer] = useState(false);
    const [clickStopwatch, setClickStopwatch] = useState(false);
    const handletimer = () => {
        setClickTimer(true);
        setClickStopwatch(false);
    }
    console.log("rendering.....");
    const handleStopwatch = () => {
        setClickStopwatch(true);
        setClickTimer(false);
    }
    console.log(clickStopwatch, clickTimer);
    return (
        <div className='home-main'>
            <div className='navigator'>
                <div style={clickTimer === true ? { borderBottom: "2px solid #8ab4f8", color: "#8ab4f8" } : { borderBottom: "2px solid #414246fd", color: "white" }} onClick={handletimer}><span class="material-symbols-outlined">
                    timer
                </span> TIMER</div>
                <div style={clickStopwatch === true ? { borderBottom: "2px solid #8ab4f8", color: "#8ab4f8" } : { borderBottom: "2px solid #414246fd", color: "white" }} onClick={handleStopwatch}><span class="material-symbols-outlined">
                    av_timer
                </span> STOPWATCH</div>
            </div>
            <div className='timer-stuff'>
                {/* <Mainroutes /> */}
                {clickTimer && <Timer/>}
                {clickStopwatch && <Stopwatch/>}
            </div>
        </div>
    )
}

export default Nav