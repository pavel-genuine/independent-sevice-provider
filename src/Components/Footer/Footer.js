import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-black text-white p-5 w-100 mt-5 row footer'>
            <div className='col-md-7 gratitude ' >
                <h5>
                    James Clear
                </h5>
                <p className=' mt-4 text-secondary'>
                    <small>
                        Thanks for reading. It makes a difference. I donate 5 percent of profits to causes that improve the health of children, pregnant mothers, and families in low income communities.
                        We have helped over 30,000 people so far.
                    </small>
                </p>
            
            </div>


            <div className='col-md-4 row' >
                <div className='col-md-4 col-sm-12 border-end border-secondary'>
                    <h6 className='text-secondary '>Ideas</h6>
                    <h6>Article</h6>
                    <h6>Newsletter</h6>

                </div>

                <div className='col-md-5 col-sm-12 border-end border-secondary'>
                    <h6 className='text-secondary'>Books</h6>
                    <h6>Atomic Habits</h6>
                    <h6>Habit Journal</h6>
                </div>
                <div className='col-md-3 col-sm-12 '>
                    <h6 className='text-secondary'>Links</h6>
                    <h6>Twitter</h6>
                    <h6>Instagram</h6>
                </div>

            </div>
        </div>
    );
};

export default Footer;