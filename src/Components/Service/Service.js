import { Button } from 'bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {

    const { name, img, details} =service

    return (
        <div className='col-6' >
          <div className='border w-50 m-4 '>
          <img style={{width:'100%'}} src={img} alt="" />
            <h5>{name}</h5>

            <p title={details}>{details.slice(0,150)}</p>

            <Link to='/checkout'><button className='btn btn-dark' >Checkout</button></Link>
          </div>

            
        </div>
    );
};

export default Service;