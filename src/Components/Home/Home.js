import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Services from '../Services/Services';

import Banner from './Banner';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Services></Services>
            
        </div>
    );
};

export default Home;