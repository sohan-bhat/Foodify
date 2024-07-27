import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar style={{backgroundColor: "#5ECA89"}} position='relative'>
            <Toolbar>
                <Link to={"/"} style={{textDecoration: "none"}}><img className="foodify-logo" src='foodify.png' alt='Foodify Logo' width={55} height={55}/></Link>
                <Link to={"/"} style={{color: "white", textDecoration: "none"}}><i><h1>FOODIFY</h1></i></Link>
                <h1 className='header-slogan'> - Add your ingredients, find recipes!</h1>
            </Toolbar>
        </AppBar>
    );
};

export default Header;