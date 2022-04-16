import React, { useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import auth from '../../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';


const SignUp = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }


    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }
    const handleConfirmPasswordBlur = e => {
        setConfirmPassword(e.target.value);
    }


    let errorElement;

    if (error) {
        errorElement =
            <div>
                <p>Error: {error.message}</p>
            </div>

    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        return (
            <div>
                <p>Signed In User: {user.email}</p>
            </div>
        );
    }


    return (
        <div className='container text-center mb-5'>
            <h4 className='p-4'>Dev.Kbin</h4>
            <SocialLogin></SocialLogin>
            <p>Sing up with email</p>
            <form className='d-flex flex-column w-50 mx-auto'>
                <input
                    className="m-2 p-2 bg-light border-0 rounded" type="text" name="name" id="" placeholder='Name' required />
                <input
                    onBlur={handleEmailBlur}
                    className="m-2 p-2 bg-light border-0 rounded" type="email" name="email" id="" placeholder='Email' required />
                <input
                    onBlur={handlePasswordBlur} className="m-2 p-2 bg-light border-0 rounded" type="password" name="password" id="" placeholder='Password' required />
                <input
                    onBlur={handleConfirmPasswordBlur}
                    className="m-2 p-2 bg-light border-0 rounded" type="password" name="confirm-password" id="" placeholder='Confirm Password' required />
                {errorElement}
                <button onClick={() => signInWithEmailAndPassword(email, password)} type='submit' className="m-2 btn btn-danger">Sign up</button>
                <Link to='/login' className='text-danger text-decoration-none'>Already have an account?</Link>
            </form>
        </div>
    );
};

export default SignUp;