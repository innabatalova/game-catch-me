import React from 'react'

import TubeImg from '../static/image/tube.png'

const Tube = ( {classTubeProps} ) => {
    return(
        <div className={`tube tube__` + classTubeProps}>
            <img src={TubeImg} alt="tube" />
        </div>
    )
}

export default Tube