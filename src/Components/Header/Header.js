import { signOut } from 'firebase/auth';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {

    const [user]=useAuthState(auth)

    return (
        <div className='row  p-3 w-100 shadow' >
           
           <div className='col-4 ms-4 d-flex align-items-center'>
           <CustomLink   to='/'> <h4 className='ms-5'>James Clear</h4></CustomLink>
           </div>

           <div className='header-link col-3' >
           
           <CustomLink  to='/'>Home</CustomLink>
           
           <CustomLink  to='/checkout'>Checkout</CustomLink>
           <CustomLink  to='/blogs'>Blogs</CustomLink>
           <CustomLink   to='/about'>About</CustomLink>

           </div>

           <div className='col-3 d-flex justify-content-evenly'>
           {
                user?'':<CustomLink  to='/signup'>Sign Up</CustomLink>
            }
            
             {
               user? <span style={{backgroundColor:'black', color:'white', borderRadius:'30px',padding:'10px', marginLeft:'10px'}}>
               {user?.email}
               </span> :''
           }
           {
                user? <button style={{border:'0', backgroundColor:'white'}}  onClick={()=>signOut(auth)} >Sign Out</button>:  <CustomLink to='/signin'>Sign In</CustomLink> 
            }
           </div>

          
            
        </div>
    );
};

export default Header;