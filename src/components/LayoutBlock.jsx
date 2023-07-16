import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import StartGame from './StartGame'
import GameDisplay from './GameDisplay'

const LayoutBlock = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<StartGame />} />
                <Route path="game" element={<GameDisplay />} />
            </Routes>
      </BrowserRouter>
    )
}

export default LayoutBlock