import React from 'react'

import { Typography } from '@mui/material';

import Tube from './Tube'
import MenDefault from './MenDefault'

import DickImg from '../static/image/dick.png'

const GameDisplay = () => {
    return(
        <div className='game'>
            <Typography variant="h4" color="white" sx={{ textTransform: 'uppercase'}}>Счет:</Typography>
            <Typography variant="subtitle1" color="red" sx={{ fontSize: '1.5rem' }}>0000</Typography>
            <Tube classTubeProps='top-left' />
            <Tube classTubeProps='top-right' />
            <Tube classTubeProps='bottom-left' />
            <Tube classTubeProps='bottom-right' />
            <img className='dick dick1' src={DickImg} />
            <img className='dick dick2' src={DickImg} />
            <img className='dick dick3' src={DickImg} />
            <img className='dick dick4' src={DickImg} />
            <img className='dick dick5' src={DickImg} />
            <img className='dick dick6' src={DickImg} />
            <img className='dick dick7' src={DickImg} />
            <MenDefault/>
        </div>
    )
}

export default GameDisplay