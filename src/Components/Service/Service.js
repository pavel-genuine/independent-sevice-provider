import { Button } from 'bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {

    const { name,price, img, details} =service

    return (
        <div className='col-6' >
          <div className='border w-50 m-4 p-3 shadow'>
          <img style={{width:'100%',marginBottom:'15px'}} src={img} alt="" />
            <h5>{name}</h5>
            <h5>Price : {price}</h5>

            <p title={details}>{details.slice(0,150)}...</p>

            <Link to='/checkout'><button className='btn btn-dark' >Checkout</button></Link>
          </div>

            
        </div>
    );
};

export default Service;