import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';

const Login = () => {
    return (
        <div className='container text-center'>
            <h4 className='p-4'>Dev.Kbin</h4>
            <SocialLogin></SocialLogin>
            <p>Login with email</p>
            <form className='d-flex flex-column w-50 mx-auto'>
                <input className="m-2 p-2 bg-light border-0 rounded" type="email" name="email" id="" placeholder='Email' />
                <input className="m-2 p-2 bg-light border-0 rounded" type="password" name="password" id="" placeholder='Password' />
                <button className="m-2 btn btn-danger">Login</button>
                <div className='d-flex justify-content-between mx-4'>
                    <Link to='/signup' className='text-danger text-decoration-none'>Don't have an account?</Link>
                    <p className='btn btn-link text-dark text-decoration-none'> Forgot password?</p>
                </div>

            </form>
        </div>
    );
};

export default Login;