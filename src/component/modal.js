import React, { Component } from 'react';
import { ProductConsumer } from './context';
import {Link} from 'react-router-dom';

class ModalShop extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {modalOpen, closeModal} = value;
                    const {title, img, price} = value.ModalProduct;
                    if(!modalOpen){
                        return null;
                    }else{
                        return(
                            <div className="modalContainer">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capiltalize p-5" id="modal">
                                            <h5>Item added to the cart</h5>
                                            <img src={img} alt="" className="img-fluid"/>
                                            <h5 className="ProductTitleSM">{title}</h5>
                                            <h5 className="text-muted">price : ${price}</h5>
                                            <Link to="/new-arrivals">
                                                <button className="DetailsProductBtn" onClick={()=>closeModal()}>
                                                    Continue shopping
                                                </button>
                                            </Link>
                                            <Link to="/cart">
                                                <button className="ModalBtn" onClick={()=>closeModal()}>
                                                    Go to cart
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }}
            </ProductConsumer>
        );
    }
}

export default ModalShop;