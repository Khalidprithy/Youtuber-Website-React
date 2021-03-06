import React from 'react';
import './SocialLogin.css'
import { AiFillFacebook, AiFillGoogleSquare, AiOutlineGithub } from 'react-icons/ai';
import auth from '../../../firebase.init';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


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
        return <Loading></Loading>;
    }
    if (userGit || userGoogle || userFacebook) {
        navigate(from, { replace: true });
    }


    return (
        <div>
            <form>
                <div className="d-flex align-items-center justify-content-center mb-4">
                    <div className="social-icons text-primary"> <AiFillFacebook
                        onClick={() => signInWithFacebook()}
                        className='icons facebook-icon' ></AiFillFacebook> </div>
                    <div className="social-icons text-danger"> <AiFillGoogleSquare
                        onClick={() => signInWithGoogle()}
                        className='icons google-icon'></AiFillGoogleSquare> </div>
                    <div className="social-icons"> <AiOutlineGithub
                        onClick={() => signInWithGithub()}
                        className='icons github-icon text-dark'></AiOutlineGithub>  </div>
                </div>
                <div className='d-flex align-items-center justify-content-center'>
                    <div className='line w-25'></div>
                    <p className='px-2 mt-2'>or</p>
                    <div className='line w-25'></div>
                </div>
                {errorElement}
            </form>
        </div>
    );
};

export default SocialLogin;