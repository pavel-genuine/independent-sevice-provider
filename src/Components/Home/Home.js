import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Subscription from '../Subscription/Subscription';

import Banner from './Banner';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Services></Services>
            <Subscription></Subscription>
            
        </div>
    );
};

export default Home;