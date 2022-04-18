import React from 'react';

const Blogs = () => {
    return (
        <div style={{padding:"50px"}}>
            <h2 className='text-center'>Blogs</h2>
            <h5>Authorization vs authentication</h5>
            <p>Authentication is the process that validate the user if he is the member to access the system and
                confirms what they are claiming , i.e: sign in or sign up through email and password or
                third party validation like : google/facebook sign in..
                On the other hand authorization gives those users permission what resource or function  to access of the system ,
                i.e: downloading , uploading something or providing some sort of administrative access to an application.</p>
            <h5>Usage of Firebase</h5>
            <p>
                I'm usinng firebase for authentication like : sign up or sign with email , password or with google or with other social media account.I'm also using firebase Hosting.
                Other options to implement authentication : Okta, STYTCH, Ory,Supabase, PingIdentity, Keycloak, Frontegg, Authress, Auth0, Amazon Cognito, OneLogin.
            </p>
            <h5>
                Other services firebase provides other than authentication :
            </h5>
            <p>
                Firebase Hosting, Cloud Functions,Remote config, Realtime Database, Cloud Firestore, and Cloud Messaging.
                You can build powerful microservices and web apps using these complimentary Firebase services.

            </p>

        </div>
    );
};

export default Blogs;