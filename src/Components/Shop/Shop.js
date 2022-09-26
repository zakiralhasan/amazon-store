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
                <h2 className='order-summary-heading'>Order summary</h2>
                <p>Selected Items: </p>
                <p>Total Price: </p>
                <p>Total Shipping Charge: </p>
                <p>Tax: </p>
                <h3>Grand Total: </h3>
            </div>
        </div>
    );
};

export default Shop;