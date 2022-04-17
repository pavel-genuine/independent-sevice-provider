import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SignIn = () => {

    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    const [ email, setEmail]=useState('')
    const [password, setPassword]=useState('')

    const [
      signInWithEmailAndPassword,
      user,
      error,
    ] = useSignInWithEmailAndPassword(auth);
  

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if(user){
        navigate(from, { replace: true });
    }
  

  
    const handleEmail=(e)=>{
        console.log(e.target.value);
        setEmail(e.target.value)
    }
    const handlePassword=(e)=>{
        console.log(e.target.value);
        setPassword(e.target.value)
    }

    const handleSignInUser=(e)=>{

        e.preventDefault()
        signInWithEmailAndPassword(email,password)
    console.log(user);

     
    }
    
    console.log(user);
    
    return (
        <div className=' d-flex  align-items-center justify-content-center'>    
    <Form onSubmit={handleSignInUser} className='w-25' >

      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Control onBlur={handleEmail} style={{backgroundColor:'#f6f3f3', border:0, padding:'12px', fontSize:'18px'}} type="email" name='email' placeholder="Email" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword1">
        <Form.Control onBlur={handlePassword} style={{backgroundColor:'#f6f3f3', border:0, padding:'12px', fontSize:'18px'}} type="password" placeholder="Password" />
      </Form.Group>
      
      <input  className="bg-dark border-0 text-white w-100 rounded text-center fs-5 " style={{height:'50px'}} type="submit" value="Sign In"  />
     <p className='text-danger mt-3' >Don't Have an A/C ?  <Link className='text-decoration-none ' to='/signup'>Sign up</Link></p>
      {error ? error.message :''}
    </Form>
    </div>
            
    
    );
}

export default SignIn;