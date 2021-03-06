import React, { useRef, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }

    const handlePasswordBlur = e => {
        setPassword(e.target.value)
    }

    const handleUserLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
        setEmail('');
        setPassword('');
    }
    if (user) {
        navigate(from, { replace: true });
    }

    const resetPassword = async () => {
        if (email) {
            const email = emailRef.current.value;
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email')
        }

    }

    return (
        <div className='container text-center my-5'>
            <h4 className='p-4'>Dev.Kbin</h4>
            <SocialLogin></SocialLogin>
            <ToastContainer />
            <form onSubmit={handleUserLogin} className='d-flex flex-column w-50 mx-auto'>
                <input
                    onBlur={handleEmailBlur}
                    className="m-2 p-2 bg-light border-0 rounded" ref={emailRef} type="email" name="email" id="" placeholder='Email' required />
                <input
                    onBlur={handlePasswordBlur}
                    className="m-2 p-2 bg-light border-0 rounded" type="password" name="password" id="" placeholder='Password' required />
                <p style={{ color: 'red' }}>{error?.message}</p>
                <button
                    type='submit'
                    className="m-2 btn btn-danger">Login</button>
                <div>
                    {
                        loading &&
                        <Loading></Loading>
                    }
                    <div className='d-md-flex align-items-center justify-content-between '>
                        <Link to='/signup' className='text-danger text-decoration-none ps-2'>Don't have an account?</Link>
                        <button
                            onClick={resetPassword}
                            className='btn btn-link text-danger text-decoration-none'> Forgot password?</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;