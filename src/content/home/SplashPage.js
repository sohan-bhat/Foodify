import { Button } from '@mui/material';
import React from 'react';

const SplashPage = () => {
    return (
        <>
            <h1 className='header-slogan'>Turn Ingredients into Inspiration: Discover Recipes with What You Have!</h1>
            <div className='add-ingredients-btn'>
                <Button href='/recipes' variant='contained'>Start Adding ingredients →</Button>
            </div>
        </>
    );
};

export default SplashPage;