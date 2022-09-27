import React, { useEffect, useState } from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import SingleCard from '../SingleCard/SingleCard';
import './Shop.css'

const Shop = () => {
    const [products, setProducts]=useState([]);
    const [cart, setCart]=useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);

    //this function for handling Add to Cart button.
    const handleAddToCarat = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className='card-container'>
                {
                    products.map(product=><SingleCard 
                        key={product.id}
                        product={product}
                        handleAddToCarat={handleAddToCarat}
                    ></SingleCard>)
                }
            </div>
            <div className='order-summary-section'>
                <OrderSummary cart={cart}></OrderSummary>
            </div>
        </div>
    );
};

export default Shop;