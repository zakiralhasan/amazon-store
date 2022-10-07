import React, { useState } from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import SingleCard from '../SingleCard/SingleCard';
import { addToLocalStorage } from '../LocalStorage/LocalStorage';
import './Shop.css'
import { useLoaderData } from 'react-router-dom';

const Shop = () => {
    const products = useLoaderData();
    const [cart, setCart]=useState([]);

    //this function for handling Add to Cart button.
    const handleAddToCarat = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
        addToLocalStorage(product.id);
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