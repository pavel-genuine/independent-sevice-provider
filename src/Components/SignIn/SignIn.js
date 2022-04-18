import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SignIn = () => {

  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [
    signInWithEmailAndPassword,
    user,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, user1, loading, error1] = useSignInWithGoogle(auth);

  const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(
    auth
  );


  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }



  const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value)
  }

  const handleSignInUser = (e) => {

    e.preventDefault()
    signInWithEmailAndPassword(email, password)
    console.log(user);


  }

  console.log(user);

  return (
    <div className=' d-flex flex-column my-5  align-items-center justify-content-center'>
      <Form onSubmit={handleSignInUser} className='w-25' >

        <Form.Group className="mb-3" controlId="formBasicEmail1">
          <Form.Control onBlur={handleEmail} style={{ backgroundColor: '#f6f3f3', border: 0, padding: '12px', fontSize: '18px' }} type="email" name='email' placeholder="Email" />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicPassword1">
          <Form.Control onBlur={handlePassword} style={{ backgroundColor: '#f6f3f3', border: 0, padding: '12px', fontSize: '18px' }} type="password" placeholder="Password" />
        </Form.Group>

        <input className="bg-dark border-0 text-white w-100 rounded text-center fs-5 " style={{ height: '50px' }} type="submit" value="Sign In" />
        <p className='text-danger mt-3' >Don't Have an A/C ?  <Link className='text-decoration-none ' to='/signup'>Sign up</Link></p>
        {error ? error.message : ''}

        <div>
        <span className='text-danger' >Forgot Password ?</span>
        <button className='border-0 ms-2 bg-white text-primary'
          onClick={async () => {
            await sendPasswordResetEmail(email);
            alert('Sent email');
          }}>Reset Password</button>
      </div>
      </Form>

      

      <div>
      <input onClick={()=>signInWithGoogle()} className="bg-dark border-0 text-white w-100 rounded text-center fs-5 px-5 my-3 " style={{ height: '40px' }} type="button" value="Google Sign In" />

      </div>

    </div>


  );
}

export default SignIn;