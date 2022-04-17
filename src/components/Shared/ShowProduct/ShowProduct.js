import React from 'react';
import './ShowProduct.css';
import { FaShoppingCart } from 'react-icons/fa';

const ShowProduct = ({ product }) => {
    const { name, price, image } = product;
    return (
        <div className="col">
            <div className='book'>
                <img src={image} alt="" />
                <div className='book-info'>
                    <h4>{name}</h4>
                    <p>Price: ${price}</p>
                </div>
                <div className='btn-cart-icon'>
                    <button className='cart-btn'>Add to Cart
                        <FaShoppingCart className='icon'></FaShoppingCart>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShowProduct;