import React from 'react';
import './OrderSummary.css';

const OrderSummary = (props) => {
    const carts = props.cart;

    let total = 0;
    let charge = 0;

    for(const product of carts){
        total= total + product.price;
        charge = charge + product.shipping;
    }

    let tax = total*.1;
    let grandTotal = total + charge + tax;

    return (
        <div>
            <h2 className='order-summary-heading'>Order summary</h2>
            <p>Selected Items: {carts.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${charge}</p>
            <p>Tax: ${tax}</p>
            <h3>Grand Total: ${grandTotal}</h3>
            <div>
                <button className='clear-cart-btn'>Clear Cart</button>
                <button className='order-review-btn'>Review Order</button>
            </div>
        </div>
    );
};

export default OrderSummary;