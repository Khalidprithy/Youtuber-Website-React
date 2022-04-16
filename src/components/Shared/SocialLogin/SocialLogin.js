import React from 'react';
import { AiFillFacebook, AiFillGoogleSquare, AiFillGithub } from 'react-icons/ai';
import auth from '../../../firebase.init';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate();


    const [signInWithFacebook, userFacebook, loadingFacebook, errorFacebook] = useSignInWithFacebook(auth);
    const [signInWithGithub, userGit, loadingGit, errorGit] = useSignInWithGithub(auth);
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);

    let errorElement;

    if (errorGit || errorGoogle || errorFacebook) {
        errorElement =
            <div>
                <p>Error: {errorGit?.message} {errorGoogle?.message} {errorFacebook.message}</p>
            </div>

    }
    if (loadingGoogle || loadingGit || loadingFacebook) {
        return <p>Loading...</p>;
    }
    if (userGit || userGoogle || userFacebook) {
        navigate('/home')
    }


    return (
        <div>
            <h6>Sign up with</h6>
            <div className="d-flex align-items-center justify-content-center mb-4">
                <div className="social-icons text-primary"> <AiFillFacebook
                    onClick={() => signInWithFacebook()}
                    className='icons facebook-icon' ></AiFillFacebook> </div>
                <div className="social-icons text-danger"> <AiFillGoogleSquare
                    onClick={() => signInWithGoogle()}
                    className='icons google-icon'></AiFillGoogleSquare> </div>
                <div className="social-icons"> <AiFillGithub
                    onClick={() => signInWithGithub()}
                    className='icons github-icon'></AiFillGithub>  </div>
            </div>
            <p className='w-50 mx-auto'> <hr /> </p>
            {errorElement}

        </div>
    );
};

export default SocialLogin;