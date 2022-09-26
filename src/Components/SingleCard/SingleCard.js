import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './SingleCard.css';

const SingleCard = (props) => {
    const {id, name, img, price, ratings, seller}=props.product;
    return (
        <div>
            <div className='single-card'>
                <img src={img} alt="" />
                <div className='card-info'>
                    <h3>{name}</h3>
                    <h4>Price: ${price}</h4>
                    <p>Manufacturer: {seller}</p>
                    <p>Ratings: {ratings}</p>
                </div>
                <button className='card-btn'>
                    <p>Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
                
            </div>
        </div>
    );
};

export default SingleCard;