import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import StartGame from './StartGame'
import GameDisplay from './GameDisplay'
import GameOver from './GameOver'

const LayoutBlock = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<StartGame />} />
                <Route path="game" element={<GameDisplay />} />
                <Route path="over" element={<GameOver />} />
            </Routes>
      </BrowserRouter>
    )
}

export default LayoutBlock