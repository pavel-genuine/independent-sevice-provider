import React from 'react';
import img from '../../images/0_zuoG4HErCEV5LamIq.pngj.png'
import  './Banner.css'

const Banner = () => {
    return (
        <div className='banner bg-black mb-5' >
          <div><img   src={img} alt="" /></div>
          <div className='fact' >
          <h1 className='text-white'>The writer, speaker, trainer...</h1>
          <h6 className='text-white'>I’ve been writing at JamesClear.com about habits, decision making, and continuous improvement since 2012.
           I’m the author of the #1 New York Times bestseller, Atomic Habits, which has sold more than 7 million copies worldwide and has been translated into more than 50 languages. 
           I'm also known for my popular 3-2-1 newsletter, which is sent out each week to more than 1 million subscribers.
           </h6>
          </div>
        </div>
    );
};

export default Banner;