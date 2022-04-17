
import { Button } from 'bootstrap';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [
      createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const handleEmail=(e)=>{
        console.log(e.target.value);
        setEmail(e.target.value)
    }
    const handlePassword=(e)=>{
        console.log(e.target.value);
        setPassword(e.target.value)
    }

    const handleCreateUser=(e)=>{

        e.preventDefault()
        createUserWithEmailAndPassword(email,password)
console.log(user);

     
    }
    
    console.log(user);
    
    return (
        <div className=' d-flex  align-items-center justify-content-center'>    
    <Form onSubmit={handleCreateUser} className='w-25' >

      <Form.Group  className="mb-3 bg-grey " controlId="formBasicText">
        <Form.Control style={{backgroundColor:'#f6f3f3', border:0, padding:'12px', fontSize:'18px'}}  type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onBlur={handleEmail} style={{backgroundColor:'#f6f3f3', border:0, padding:'12px', fontSize:'18px'}} type="email" name='email' placeholder="Email" />
      </Form.Group>

      
    
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control onBlur={handlePassword} style={{backgroundColor:'#f6f3f3', border:0, padding:'12px', fontSize:'18px'}} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Control style={{backgroundColor:'#f6f3f3', border:0, padding:'12px', fontSize:'18px'}} type="password" placeholder="Confirm  Password" />
      </Form.Group>
      <input  className="bg-dark border-0 text-white w-100 rounded text-center fs-5 " style={{height:'50px'}} type="submit" value="Sign Up"  />
     <p className='text-danger mt-3' >Already Have an A/C ?  <Link className='text-decoration-none ' to='/signin'>Sign In</Link></p>
      
    </Form>
    </div>
            
    
    );
};

export default SignUp;