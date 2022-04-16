import React from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';


const SignUp = () => {


    return (
        <div className='container text-center mb-5'>
            <h4 className='p-4'>Dev.Kbin</h4>
            <SocialLogin></SocialLogin>

            <form className='d-flex flex-column w-50 mx-auto'>
                <input className="m-2 p-2 bg-light border-0 rounded" type="text" name="name" id="" placeholder='Name' />
                <input className="m-2 p-2 bg-light border-0 rounded" type="email" name="email" id="" placeholder='Email' />
                <input className="m-2 p-2 bg-light border-0 rounded" type="password" name="password" id="" placeholder='Password' />
                <input className="m-2 p-2 bg-light border-0 rounded" type="password" name="Password" id="" placeholder='Confirm Password' />
                <button className="m-2 btn btn-danger">Sign In</button>
                <Link to='/login' className='text-danger text-decoration-none'>Already have an account?</Link>
            </form>
        </div>
    );
};

export default SignUp;