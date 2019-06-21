import React from 'react';

const CartColumns = () => {
    return (
        <div className="d-lg-block d-none container-fluid text-center">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Products</p>        
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Name of product</p>        
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Price</p>        
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Quantity</p>        
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Remove</p>        
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Total</p>        
                </div>
            </div>
        </div>
    );
};

export default CartColumns;