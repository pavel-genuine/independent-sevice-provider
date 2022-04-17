
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({children}) => {

    const [user,loading]=useAuthState(auth)

    const location = useLocation()


    if(loading){
        return <h1>loaing...</h1>
    }
    if(!user){
          
        return <Navigate to='/signin' state={{from:location}} replace ></Navigate>

    } 

    if(loading){
        return <p>loaing...</p>
    }

    return children
};

export default RequireAuth;
