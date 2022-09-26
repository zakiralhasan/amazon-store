import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';
import './Shop.css'

const Shop = () => {
    const [products, setProducts]=useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);

    return (
        <div className='shop-container'>
            <div className='card-container'>
                {
                    products.map(product=><SingleCard 
                        key={product.id}
                        product={product}
                    ></SingleCard>)
                }
            </div>
            <div className='order-summary-section'>
                <h1>Order summary section</h1>
            </div>
        </div>
    );
};

export default Shop;