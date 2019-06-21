import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import TopBar from './TopBar';
import NavBar from './NavBar';
import {ProductConsumer} from '../context';
import CartButton from '../cart/checkout/cartButton';


class Header extends Component {
    render() {
        return (
            <div>
                <TopBar/>
                <div className="container header">
                    <Link to="/">
                        <div className="logo">
                            <p className="logoName">GRETONG</p>
                            <img src="/img/logo_line.svg" alt="logo_line" className="logoImage"/>
                            <p className="logoDescription">ONLINE STORE</p>
                        </div>
                    </Link>
                    <div className="SSRC">
                        <div className="ssc">
                            <button className="loginbtn"><Link to="/login" className="login">Login</Link></button>
                            <button className="registerbtn"><Link to="/register" className="register">Register</Link></button>
                            
                            <ProductConsumer>
                                {value =>{
                                        return (
                                            <React.Fragment>
                                                <CartButton value={value}/>
                                            </React.Fragment>
                                        )
                                }}
                            </ProductConsumer>
                            <button className="checkoutbtn"><Link to="/checkout" className="checkout">Checkout</Link></button>
                        </div>
                        <div className="search-container">
                            <input type="text" placeholder="Search" className="search"/>
                            <button type="submit"><i className="fa fa-search"></i></button>
                        </div>
                    </div>
                </div>
                <NavBar/>
            </div>
        );
    }
}

export default Header;