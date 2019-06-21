import React from 'react';

const PlaceOrder = ({value}) => {
    const {ClearCart} = value;
    return (
        <button className="btn btn-checkout back-btn-checkout" >
              Place Order
        </button>
    );
};

export default PlaceOrder;