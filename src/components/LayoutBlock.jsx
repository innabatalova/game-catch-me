import React from 'react'

import Tube from './Tube'
import MenDefault from './MenDefault'

import DickImg from '../static/image/dick.png'

const LayoutBlock = () => {
    return(
        <>
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
        </>
    )
}

export default LayoutBlock