import React from 'react'
import '../styles/Home.css'
const Home = () => {
  return (
    <div className='home-main'>
      <div className='navigator'>
        <div><span class="material-symbols-outlined">
          timer
        </span> TIMER</div>
        <div><span class="material-symbols-outlined">
          av_timer
        </span> STOPWATCH</div>
      </div>
      <div></div>
    </div>
  )
}

export default Home