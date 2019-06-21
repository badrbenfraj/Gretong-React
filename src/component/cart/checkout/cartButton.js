import React from 'react';
import {Link} from 'react-router-dom';

const CartButton = ({value}) => {
    const {cart, cartTotal} =value;
    return (
        <button className="mycartbtn"><Link to="/cart" ><i className="mycart fas fa-cart-plus"/>My Cart ( {cart.length} ) : ${cartTotal}</Link></button>
    );
};

export default CartButton;