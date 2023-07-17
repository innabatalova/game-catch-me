import React from 'react'

import MenImg from '../static/image/men.png'
import FaceImg from '../static/image/vladlen.png'

const MenDefault = () => {
    return(
        <div className="men" >
            <img className='men__body' src={MenImg} alt="vladlen" />
            <img className='men__face' src={FaceImg} alt="vladlen" />
        </div>
        
    )
}

export default MenDefault