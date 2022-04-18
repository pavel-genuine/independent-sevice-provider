import { Button } from 'bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {

    const { name,price, img, details} =service

    return (
        <div className='col-6' >
          <div className='border service  shadow'>
          <img  src={img} alt="" />
            <h5>{name}</h5>
            <h5>Price : {price}</h5>

            <p title={details}>{details.slice(0,150)}...</p>

            <Link to='/checkout'><button className='btn btn-dark' >Checkout</button></Link>
          </div>

            
        </div>
    );
};

export default Service;