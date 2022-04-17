import React from 'react';
import useProduct from '../../../hooks/useProduct';
import ShowProduct from '../../Shared/ShowProduct/ShowProduct';

const Shop = () => {

    const [products, setProducts] = useProduct();


    return (
        <div>
            <div class="row row-cols-1 row-cols-md-4 g-4 m-4">
                {
                    products.map(product => <ShowProduct
                        key={product.id}
                        product={product}
                    ></ShowProduct>)
                }
            </div>
        </div>
    );
};

export default Shop;