import { signOut } from 'firebase/auth';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {

    const [user]=useAuthState(auth)

    return (
        <div style={{margin:'50px 200px '}} className='d-flex justify-content-between'>
           
           <Link style={{textDecoration:'none', color:'black'}}  to='/'> <h5>James Clear</h5></Link>

           <div >
           
           <Link style={{margin:'0 20px 0 20px'}} to='/'>Home</Link>

           <Link style={{margin:'0 20px 0 20px'}} to='/checkout'>Checkout</Link>
           <Link style={{margin:'0 20px 0 20px'}} to='/blogs'>Blogs</Link>
           <Link style={{margin:'0 20px 0 20px'}} to='/about'>About</Link>

            {
                user?'':<Link style={{margin:'0 20px 0 20px'}} to='/signup'>Sign Up</Link>
            }
            {
                user? <button style={{border:'0', backgroundColor:'white'}}  onClick={()=>signOut(auth)} >Sign Out</button>:  <Link to='/signin'>Sign In</Link> 
            }

           {
               user? <span style={{backgroundColor:'black', color:'white', borderRadius:'30px',padding:'10px', marginLeft:'20px'}}>
               {user?.email}
               </span> :''
           }

           </div>
            
        </div>
    );
};

export default Header;