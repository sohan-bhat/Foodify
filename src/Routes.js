import React from 'react';
import './App.css'
import {Routes as Switch, Route } from 'react-router-dom';

import Home from './content/home/Home'
import Header from './content/header-footer/Header';
import Recipe from './content/recipe/Recipe';

const Routes = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route path='/' Component={Home}/>
                <Route path='/recipes' Component={Recipe} />
            </Switch>
        </>
    );
};

export default Routes;