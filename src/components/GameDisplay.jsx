import React, { useEffect, useState } from 'react'

import { Typography } from '@mui/material';

import Tube from './Tube'
import MenDefault from './MenDefault'

import game from '../controllers/game'

setInterval(() => {
    game.addArrayImg()
    setTimeout(() => {
        let test = game.getCollision()
        const count = document.querySelector('.count')
        let countValue = parseInt(count.outerText) + 10
        count.innerText = countValue
    }, 3500)
    // setTimeout(() => {
    //     game.removeArrayImg()
    // }, 4990)
}, 5000)
clearInterval()

const GameDisplay = () => {

    const [coord, setCoord] = useState('40%')

    useEffect(() => {
        const onKeypress = (e) => {
            if (e.keyCode == 97) {
                let newCoord = (coord.slice(0, -1) - 2) + '%'
                if (newCoord <= '15%') {
                    setCoord('15%')
                } else { setCoord(newCoord) }
            }
            if (e.keyCode == 100) {
                let newCoord = (parseInt(coord.slice(0, -1)) + 2) + '%'
                setCoord(newCoord)
                if (newCoord >= '75%') {
                    setCoord('75%')
                } else { setCoord(newCoord) }
            }
        }
        document.addEventListener('keypress', onKeypress);
        return () => {
            document.removeEventListener('keypress', onKeypress);
        };
    });

    return (
            <div className='game'>
                <Typography variant="h4" color="white" sx={{ textTransform: 'uppercase' }}>Счет:</Typography>
                <Typography className='count' variant="subtitle1" color="red" sx={{ fontSize: '1.5rem' }}>0</Typography>
                <Tube classTubeProps='top-left' />
                <Tube classTubeProps='top-right' />
                <Tube classTubeProps='bottom-left' />
                <Tube classTubeProps='bottom-right' />
                <MenDefault move={coord} />
            </div>    )
}

export default GameDisplay