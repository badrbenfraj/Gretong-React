import React from 'react';
import {Link} from 'react-router-dom';

const CartTools = ({value}) => {
    const {ClearCart, cartSubtotal,cartTax,cartTotal} = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-12 text-capitalize text-right">
                        <div>
                        <Link to="/checkout">
                            <button 
                                value={value}
                                className="btnCart btn btn-outline-danger text-uppercase mb-3 px-5"
                                type="button"
                            >
                                Checkout
                            </button>
                        </Link>
                        <Link to="/cart">
                            <button 
                                className="btn BtnClear btn-outline-danger text-uppercase mb-3 px-5"
                                type="button"
                                onClick={() => ClearCart()}
                            >
                                Clear cart
                            </button>
                        </Link>
                        </div>
                        <h5>
                            <span className="text-title">Subtotal: </span>
                            <strong>${cartSubtotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">Tax: </span>
                            <strong>${cartTax}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">Total: </span>
                            <strong>${cartTotal}</strong>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default CartTools;