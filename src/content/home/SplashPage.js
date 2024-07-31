import { Button } from '@mui/material';
import React from 'react';

const SplashPage = () => {
    return (
        <>
            <h1 className='header-slogan'>Turn Ingredients into Inspiration: <br /> Discover Recipes with What You Have!</h1>
            <div className='add-ingredients-btn'>
                <Button href='/recipes' variant='contained'>Get Started Now →</Button>
            </div>
        </>
    );
};

export default SplashPage;