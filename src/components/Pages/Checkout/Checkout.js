import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Checkout.css'
const Checkout = () => {
    const [user, loading, error] = useAuthState(auth, getMouseEventOptions);

    const handleCheckoutSubmit = () => {
        if (user) {

        }
    }


    return (
        <div className='checkout text-center'>
            <h4 className='pt-5'>Fill the form for checkout</h4>
            <form onSubmit={handleCheckoutSubmit} className=' d-flex flex-column w-50 mx-auto'>
                <input className="m-2 p-2 bg-light border-0 rounded" type="text" name="" id="" placeholder='Name' />
                <input className="m-2 p-2 bg-light border-0 rounded" type="email" name="" id="" placeholder='Email' />
                <input className="m-2 p-2 bg-light border-0 rounded" type="number" name="" id="" placeholder='Phone Number' />
                <input className="m-2 p-2 bg-light border-0 rounded" type="text" name="" id="" placeholder='Address' />
                <input className='btn btn-primary' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Checkout;