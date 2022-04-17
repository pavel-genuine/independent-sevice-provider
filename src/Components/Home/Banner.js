import React from 'react';
import img from '../../images/James-Clear.png'
import  './Banner.css'

const Banner = () => {
    return (
        <div className='banner' >
          <div><img  src={img} alt="" /></div>
          <div style={{width:'50%', margin:'100px 0 0 200px '}} >
          <h1>The writer, speaker, tainer...</h1>
          </div>
        </div>
    );
};

export default Banner;