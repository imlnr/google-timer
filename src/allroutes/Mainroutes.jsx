import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Stopwatch from '../pages/Stopwatch'
import Timer from '../pages/Timer'
import Home from '../pages/Home'

const Mainroutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/stopwatch' element={<Stopwatch />} />
            <Route path='/timer' element={<Timer />} />
        </Routes>
    )
}

export default Mainroutes