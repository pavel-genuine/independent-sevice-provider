import React from 'react';

const Subscription = () => {
    return (

        <div className='shadow mx-auto' style={{padding:'3%',width:'95%'}}>
            <h3 className='text-center text-decoration-underline mb-5'>Subscribe :</h3>
            <h5>
                Download Chapter 1 of Atomic Habits,
                my #1 New York Times bestselling book. And enroll in the free email course.
               
                </h5>
                <div class="input-group mb-3">
                    <input type="email" class="form-control" placeholder="Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <span className="input-group-text bg-dark text-white" id="basic-addon2">Download The First Lesson</span>
                </div>
           <h5>
           Packed with self-improvement strategies, Atomic Habits will teach you how to make the small changes that will transform your habits and deliver remarkable results.
           </h5>
        </div>
    );
};

export default Subscription;