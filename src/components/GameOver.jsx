import React from 'react'
import { useNavigate } from 'react-router-dom';

import { Button, Typography } from '@mui/material';

const GameOver = () => {
    const navigate = useNavigate();

    return(
        <div className="over">
            <Typography variant="h1" color="red">Game over...</Typography>
            <Typography variant="h2" color="white">Славно напихали Владлену!</Typography>
            <Typography variant="subtitle1" color="white" sx={{ fontSize: '1.5rem', marginTop: '50px' }}>
                Набрано очков:
            </Typography>
            <Typography variant="subtitle1" color="#ff4081" sx={{ fontSize: '1.5rem' }}>
                0000
            </Typography>
            <Button variant="contained" onClick={() => navigate('/game', { replace: true })} sx={{ fontSize: '2rem', padding: '10px', marginTop: '30px', marginRight: '20px' }}>Играть снова</Button>
            <Button variant="contained" onClick={() => navigate('/', { replace: false })} sx={{ fontSize: '2rem', padding: '10px', marginTop: '30px' }}>В начало</Button>
        </div>
    )
}

export default GameOver