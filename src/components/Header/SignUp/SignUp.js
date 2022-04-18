import React, { useState } from 'react';
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';


const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showError, setShowError] = useState('');
    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { useSendEmailVerification: true });

    const [updateProfile, updating, profileError] = useUpdateProfile(auth);

    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }

    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }
    const handleConfirmPasswordBlur = e => {
        setConfirmPassword(e.target.value);
    }

    if (user) {
        console.log(user);
    }


    const handleCreateUser = async e => {
        e.preventDefault()
        const displayName = e.target.name.value
        if (email) {
            setShowError('User already exists, Please login')
        }
        if (password !== confirmPassword) {
            setShowError('Password did not matched')
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName, });
        console.log('Updated profile');
        navigate('/home');

    }


    if (loading) {
        <Loading></Loading>
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
                <div>
                    <input
                        onClick={() => setAgree(!agree)}
                        className='me-2' type="checkbox" name="terms" id="terms" />

                    <label className={`pb-2 ${agree ? 'text-success' : ''}`} htmlFor="terms">Accept terms and condition</label>
                </div>
                <input
                    disabled={!agree}
                    className='form-submit btn btn-danger' type="submit" value="Sign Up" />
                <Link to='/login' className='text-danger text-decoration-none pt-4'>Already have an account?</Link>
            </form>
        </div>
    );
};

export default SignUp;