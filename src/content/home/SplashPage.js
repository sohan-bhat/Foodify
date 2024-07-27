import { Button } from '@mui/material';
import React from 'react';

const SplashPage = () => {
    return (
        <div className='add-ingredients-btn'>
            <Button href='/recipes' variant='contained'>Add Some ingredients →</Button>
        </div>
    );
};

export default SplashPage;