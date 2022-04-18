import { signOut } from 'firebase/auth';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {

    const [user] = useAuthState(auth)

    return (

        <div>

           <div className='mobile-nav'>
           <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container-fluid row">
                    <div className='col-md-6 ms-5'>
                        <Link className="navbar-brand fw-bold " to='/'>James Clear</Link>
                        <button className="navbar-toggler bg-secondary " style={{marginLeft:'90px'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon "></span>
                        </button>
                    </div>


                    <div className="col-md-4 collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">

                                <CustomLink to='/'>Home</CustomLink>


                            </li>
                            <li class="nav-item">
                                <CustomLink to='/checkout'>Checkout</CustomLink>
                            </li>
                            <li class="nav-item">
                                <CustomLink to='/blogs'>Blogs</CustomLink>
                            </li>
                            <li class="nav-item">
                                <CustomLink to='/about'>About</CustomLink>
                            </li>
                            <li class="nav-item dropdown">

                                {
                                    user ? <span className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: 'black', color: 'white', borderRadius: '30px', padding: '10px', marginLeft: '10px' }}>
                                        {user?.email}
                                    </span> : ''
                                }

                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">


                                    <button style={{ border: '0', backgroundColor: 'black', color: 'white', width: '100%' }} onClick={() => signOut(auth)} >Sign Out</button>



                                </ul>
                            </li>

                        </ul>
                        <form >
                            <p class="nav-item">


                                {
                                    user ? '' : <CustomLink to='/signup'>Sign Up</CustomLink>
                                }

                            </p>
                            <p class="nav-item ">

                                {
                                    user ? '' : <CustomLink to='/signin'>Sign In</CustomLink>
                                }

                            </p>      </form>
                    </div>
                </div>
            </nav>
           </div>


            <div className='desktop-nav'>
                <div className='row  p-3 w-100 mb-1 shadow ' >

                    <div className='col-4 ms-4 d-flex align-items-center'>
                        <CustomLink to='/'> <h4 className='ms-5'>James Clear</h4></CustomLink>
                    </div>

                    <div className='header-link col-3' >

                        <CustomLink to='/'>Home</CustomLink>

                        <CustomLink to='/checkout'>Checkout</CustomLink>
                        <CustomLink to='/blogs'>Blogs</CustomLink>
                        <CustomLink to='/about'>About</CustomLink>

                    </div>

                    <div className='col-3 d-flex justify-content-evenly'>
                        {
                            user ? '' : <CustomLink to='/signup'>Sign Up</CustomLink>
                        }

                        {
                            user ? <span style={{ backgroundColor: 'black', color: 'white', borderRadius: '30px', padding: '10px', marginLeft: '10px' }}>
                                {user?.email}
                            </span> : ''
                        }
                        {
                            user ? <button style={{ border: '0', backgroundColor: 'white' }} onClick={() => signOut(auth)} >Sign Out</button> : <CustomLink to='/signin'>Sign In</CustomLink>
                        }
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Header;