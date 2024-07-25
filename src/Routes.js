import React from 'react';
import './App.css'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Home from './content/home/Home'
import Header from './content/header-footer/Header';

const Routes = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route path='/' Component={Home}/>
            </Switch>
        </>
    );
};

export default Routes;