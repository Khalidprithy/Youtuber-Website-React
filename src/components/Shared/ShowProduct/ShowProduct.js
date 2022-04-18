import React from 'react';
import './ShowProduct.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ShowProduct = ({ product }) => {
    const { name, price, image } = product;
    const navigate = useNavigate()


    const handleBuyNow = () => {
        navigate('/checkout')
    }

    return (
        <div className="col">
            <div className='book'>
                <img src={image} alt="" />
                <div className='book-info'>
                    <h4>{name}</h4>
                    <p>Price: ${price}</p>
                </div>
                <div className='btn-cart-icon'>
                    <button onClick={handleBuyNow} className='cart-btn'>Buy Now
                        <FaShoppingCart className='icon'></FaShoppingCart>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShowProduct;