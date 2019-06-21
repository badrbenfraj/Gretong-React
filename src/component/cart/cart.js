import React, { Component } from 'react';
import CartColumns from './cart_columns';
import EmptyCart from './empty_cart';
import {ProductConsumer} from '../context';
import CartList from './cart_list';
import CartTools from './cartTools';

class Cart extends Component {
    render() {
        return (
            <section className="container cartBox">
                <h1 className="text-center font-weight-bold text-uppercase">Your Cart</h1>
                <ProductConsumer>
                    {value =>{
                        const {cart} =value;
                        if(cart.length > 0){
                            return (
                                <React.Fragment>
                                    <CartColumns/>
                                    <CartList value={value}/>
                                    <CartTools value={value}/>
                                </React.Fragment>
                            )
                        }else{
                            return <EmptyCart/>
                        }
                    }}
                </ProductConsumer>
                
                
                
            </section>
        );
    }
}

export default Cart;