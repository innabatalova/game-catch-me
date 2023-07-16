import React from 'react'

import { Button, Typography } from '@mui/material';

const StartGame = () => {

    const Log = () => {
        console.log('test!!!');
    }
    return(
        <div className='start'>
          <Typography variant="h1" color="red">Игра</Typography>
          <Typography variant="h2" color="white">"Налови в панаму!"</Typography>
          <Typography variant="subtitle1" color="white" sx={{ fontSize: '1.5rem', marginTop: '50px' }}>
            Правила просты: двигай Владлена вправо и влево, пока не насуешь ему хуев в панаму.
          </Typography>
          <Typography variant="subtitle1" color="#ff4081" sx={{ fontSize: '1.5rem'}}>
            "A" - влево
          </Typography>
          <Typography variant="subtitle1" color="#ff4081" sx={{ fontSize: '1.5rem'}}>
            "D" - вправо
          </Typography>
          <Button variant="contained" onClick={Log} sx={{ fontSize: '2rem', padding: '10px', marginTop: '30px'}}>Играть</Button>
        </div>
    )
}

export default StartGame