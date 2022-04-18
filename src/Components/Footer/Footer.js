import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black text-white p-5 w-100 mt-5 row'>
            <div className='col-7 mx-5' >
                <h5>
                    James Clear
                </h5>
                <p className='w-50 mt-4 text-secondary'>
                    <small>
                        Thanks for reading. It makes a difference. I donate 5 percent of profits to causes that improve the health of children, pregnant mothers, and families in low income communities.
                        We have helped over 30,000 people so far.
                    </small>
                </p>
            </div>

            <div className='col-4 row' >
                <div className='col-4 border-end border-secondary'>
                    <h6 className='text-secondary'>Ideas</h6>
                    <h6>Article</h6>
                    <h6>Newsletter</h6>

                </div>

                <div className='col-5 border-end border-secondary'>
                    <h6 className='text-secondary'>Books</h6>
                    <h6>Atomic Habits</h6>
                    <h6>Habit Journal</h6>
                </div>
                <div className='col-3 '>
                    <h6 className='text-secondary'>Links</h6>
                    <h6>Twitter</h6>
                    <h6>Instagram</h6>
                </div>

            </div>
        </div>
    );
};

export default Footer;