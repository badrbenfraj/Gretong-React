import React from 'react';

const CartItem = ({item, value}) => {
    const {id, title, img, price, total, count} = item;
    const {Increment, Decrement, RemoveItem} = value;
    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} alt="product" className="img-fluid" style={{height:'5rem', width:'5rem'}}/>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Product: </span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Price: </span>
                ${price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 col-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={() => Decrement(id)}>-</span>
                        <span className="btn btn-quantity mx-1">{count}</span>
                        <span className="btn btn-black mx-1" onClick={() => Increment(id)}>+</span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={() => RemoveItem(id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>item total: ${total}</strong>
            </div>
        </div>
    );
};

export default CartItem;