import React, { useState } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }

    const handlePasswordBlur = e => {
        setPassword(e.target.value)
    }

    const handleUserLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    if (user) {
        navigate('/home')
    }

    return (
        <div className='container text-center mt-5'>
            <h4 className='p-4'>Dev.Kbin</h4>
            <SocialLogin></SocialLogin>
            <form className='d-flex flex-column w-50 mx-auto'>
                <input
                    onBlur={handleEmailBlur}
                    className="m-2 p-2 bg-light border-0 rounded" type="email" name="email" id="" placeholder='Email' />
                <input
                    onBlur={handlePasswordBlur}
                    className="m-2 p-2 bg-light border-0 rounded" type="password" name="password" id="" placeholder='Password' />
                <p style={{ color: 'red' }}>{error?.message}</p>
                <button
                    onClick={handleUserLogin}
                    className="m-2 btn btn-danger">Login</button>
                <div>
                    {
                        loading &&
                        <div class="text-center mt-2">
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    }
                    <div className='d-md-flex align-items-center justify-content-between '>
                        <Link to='/signup' className='text-danger text-decoration-none ps-2'>Don't have an account?</Link>
                        <button className='btn btn-link text-dark text-decoration-none'> Forgot password?</button>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default Login;