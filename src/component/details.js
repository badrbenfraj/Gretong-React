import React, { Component } from 'react';
import { ProductConsumer } from './context';
import {Link} from 'react-router-dom';

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value  => {
                    const {id,company,img,info,price,title,inCart} = value.detailProduct;
                    return(
                        <div className="container py-3">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted my-5">
                                    <h1 className="ProductTitle">{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product"/>
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2 className="mb-2 mt-3 text-title text-uppercase text-muted">{title}</h2>
                                    <h4>Company: <span className="text-uppercase">{company}</span></h4>
                                    <p className="text-capitalize mt-3 mb-0 font-weight-bold mb-2"><strong>Description:</strong> </p>
                                    <p className="text-muted text-justify lead">{info}</p>
                                    <h4><strong>price: </strong><span>$</span>{price}</h4>
                                    <div>
                                        <Link to="/new-arrivals">
                                            <button className="DetailsProductBtn">Back to Products</button>
                                        </Link>
                                        <button className="DetailsProductBtn" disabled={inCart?true:false} onClick={() => {value.addToCart(id)}}>
                                        {inCart ? 'In cart': 'add to cart'}
                                        </button>
                                    </div>
                                </div>
                            </div>



                            <div className="container" style={{overflow:'hidden'}}>
                    <hr/>
                    <h4 className="Playfair-Display-Bold-Font">Related Products</h4>



                    <div className="row">
                    <div className="responsive">
                            <div className="productGallery" >
                                <div className="img-container p-4" >
                                        <Link to="/details" ><img src={img} alt="" className="card-img-top"/></Link>
                                    <button className="cart-btn" >
                                    <i className="fas fa-cart-plus"></i>
                                    </button>
                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <p className="mb-0 align-self-center ProductTitleSM">{title}</p>
                                    <h5 className="mb-0"><span className="mr-1">$</span>{price}</h5>
                            </div>
                        </div>
                        </div>


                        <div className="responsive">
                            <div className="productGallery" >
                                <div className="img-container p-4" >
                                        <Link to="/details" ><img src={img} alt="" className="card-img-top"/></Link>
                                    <button className="cart-btn" >
                                    <i className="fas fa-cart-plus"></i>
                                    </button>
                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <p className="mb-0 align-self-center ProductTitleSM">{title}</p>
                                    <h5 className="mb-0"><span className="mr-1">$</span>{price}</h5>
                            </div>
                        </div>
                        </div>
                        <div className="responsive">
                            <div className="productGallery" >
                                <div className="img-container p-4" >
                                        <Link to="/details" ><img src={img} alt="" className="card-img-top"/></Link>
                                    <button className="cart-btn" >
                                    <i className="fas fa-cart-plus"></i>
                                    </button>
                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <p className="mb-0 align-self-center ProductTitleSM">{title}</p>
                                    <h5 className="mb-0"><span className="mr-1">$</span>{price}</h5>
                            </div>
                        </div>
                        </div>
                        <div className="responsive">
                            <div className="productGallery" >
                                <div className="img-container p-4" >
                                        <Link to="/details" ><img src={img} alt="" className="card-img-top"/></Link>
                                    <button className="cart-btn" >
                                    <i className="fas fa-cart-plus"></i>
                                    </button>
                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <p className="mb-0 align-self-center ProductTitleSM">{title}</p>
                                    <h5 className="mb-0"><span className="mr-1">$</span>{price}</h5>
                                </div>
                            </div>
                </div>
                </div>


                        </div>
                        </div>
                    );
            }}
            </ProductConsumer>
        );
    }
}

export default Details;