import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { ProductConsumer } from './context';

class Product extends Component {
    render() {
        const {id,title,img,price,inCart} = this.props.product;
        return (
            <div className="responsive">
            <div className="productGallery" >
                <ProductConsumer>
                    {value => 
                    (<div className="img-container p-4" onClick={() => value.handleDetail(id)}>
                        <Link to="/details" ><img src={img} alt="" className="card-img-top" height="280.125" width="215.484"/></Link>
                        <button className="cart-btn" disabled={inCart?true:false} onClick={() => {value.addToCart(id);value.openModal(id);}}>
                            {inCart? (<p className="mb-0 text-capitalize" disabled>{" "}In Cart{""}</p>):(<i className="fas fa-cart-plus"></i>)}
                        </button>
                    </div>)}
                </ProductConsumer>
                <div className="card-footer d-flex justify-content-between">
                    <p className="mb-0 align-self-center ProductTitleSM">{title}</p>
                    <h5 className="mb-0"><span className="mr-1">$</span>{price}</h5>
                </div>
            </div>
        </div>
        );
    }
}

Product.propTypes={
    product:PropTypes.shape({
        id:PropTypes.number,
        title: PropTypes.string,
        img:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
}

export default Product;