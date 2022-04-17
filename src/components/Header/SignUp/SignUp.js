import React, { useState } from 'react';
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';


const SignUp = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showError, setShowError] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }

    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }
    const handleConfirmPasswordBlur = e => {
        setConfirmPassword(e.target.value);
    }


    const handleCreateUser = e => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setShowError('Password did not matched')
        }
        createUserWithEmailAndPassword(email, password);
    }


    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        navigate('/home')
    }


    return (
        <div className='container text-center my-5'>
            <h4 className='p-4'>Dev.Kbin</h4>
            <SocialLogin></SocialLogin>
            <form
                onSubmit={handleCreateUser}
                className='d-flex flex-column w-50 mx-auto'>
                <input
                    className="m-2 p-2 bg-light border-0 rounded" type="text" name="name" id="" placeholder='Name' required />
                <input
                    onBlur={handleEmailBlur}
                    className="m-2 p-2 bg-light border-0 rounded" type="email" name="email" id="" placeholder='Email' required />
                <input
                    onBlur={handlePasswordBlur}
                    className="m-2 p-2 bg-light border-0 rounded" type="password" name="password" id="" placeholder='Password' required />
                <input
                    onBlur={handleConfirmPasswordBlur}
                    className="m-2 p-2 bg-light border-0 rounded" type="password" name="confirm-password" id="" placeholder='Confirm Password' required />
                <p style={{ color: 'red' }}>
                    {showError}
                </p>
                <input className='form-submit btn btn-danger' type="submit" value="Sign Up" />
                <Link to='/login' className='text-danger text-decoration-none pt-4'>Already have an account?</Link>
            </form>
        </div>
    );
};

export default SignUp;