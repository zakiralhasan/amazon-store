import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './OrderSummary.css';

const OrderSummary = (props) => {
    const carts = props.cart;

    let total = 0;
    let charge = 0;

    for(const product of carts){
        total= parseFloat((total + product.price).toFixed(2));
        charge = parseFloat((charge + product.shipping).toFixed(2));
    }

    let tax = parseFloat((total*.1).toFixed(2));
    let grandTotal = parseFloat((total + charge + tax).toFixed(2));

    return (
        <div>
            <h2 className='order-summary-heading'>Order summary</h2>
            <p>Selected Items: {carts.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${charge}</p>
            <p>Tax: ${tax}</p>
            <h3>Grand Total: ${grandTotal}</h3>
            <div>
                <button className='clear-cart-btn'>
                    <p>Clear Cart</p>
                    <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                </button>
                <button className='order-review-btn'>
                    <p>Review Order</p>
                    <FontAwesomeIcon className='right-arrow' icon={faArrowRight}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default OrderSummary;