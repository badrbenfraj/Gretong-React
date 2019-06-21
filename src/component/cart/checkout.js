import React, { Component } from 'react';
import MultiStep from './index'
import { steps } from './checkout/index'



class Checkout extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 className="Playfair-Display-Bold-Font text-center">Checkout</h1><br/>
                <div className="Checkout container text-center">
                    <MultiStep steps={steps}/>
                </div>
            </React.Fragment>
        );
    }
}

export default Checkout;