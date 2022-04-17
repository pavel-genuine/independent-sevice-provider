import React from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Checkout = () => {
    
    const [user]=useAuthState(auth)

    return (
        
        <div className=' d-flex  align-items-center justify-content-center'>    
    <Form  className='w-25' >

        <h4>Billing Address :</h4>

      <Form.Group  className="mb-3 bg-grey " controlId="formBasicText">
         
          <Form.Control required style={{backgroundColor:'#f6f3f3', border:0, padding:'12px', fontSize:'18px',}}  type="text" placeholder="First Name :" />

      </Form.Group>

      <Form.Group  className="mb-3 bg-grey " controlId="formBasicText">
         
          <Form.Control required style={{backgroundColor:'#f6f3f3', border:0, padding:'12px', fontSize:'18px',}}  type="text" placeholder="Last Name :" />

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control  style={{backgroundColor:'#f6f3f3', border:0, padding:'12px', fontSize:'18px'}} type="email" name='email' readOnly placeholder={user?.email} />
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control required  style={{backgroundColor:'#f6f3f3', border:0, padding:'12px', fontSize:'18px'}} type="email" name='email'  placeholder='Address 1 :' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control   style={{backgroundColor:'#f6f3f3', border:0, padding:'12px', fontSize:'18px'}} type="email" name='email'  placeholder='Address 2 (Optional) :' />
      </Form.Group>

      
    

      <input  className="bg-dark border-0 text-white w-100 rounded text-center fs-5 " style={{height:'50px'}} type="submit" value="Submit"  />
      
    </Form>
    </div>
            
    
    );
};

export default Checkout;