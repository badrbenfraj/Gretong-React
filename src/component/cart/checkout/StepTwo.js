import React from 'react';
import {ProductConsumer} from '../../context';
import CartList from '../cart_list';
import CartTools from '../cartTools';
import CartColumns from '../cart_columns';
import EmptyCart from '../empty_cart';

export class StepTwo extends React.Component {
  constructor () {
    super()
    this.state = {
      email: '',
      emailConfirm: ''
    }
    this.handleEmailChanged = this.handleEmailChanged.bind(this);
    this.handleEmailConfirmChanged = this.handleEmailConfirmChanged.bind(this);
  }

  handleEmailChanged (event) {
    this.setState({email: event.target.value})
  }

  handleEmailConfirmChanged (event) {
    this.setState({emailConfirm: event.target.value})
  }

  render () {
    return (
      <div className="checkout-panel ">
        <div className="panel-body">
          <h3 className="title">Confirmation</h3>
          <div className="progress-bar-checkout">
            <div className="step active"></div>
            <div className="step "></div>
            <div className="step"></div>
            <div className="step"></div>
          </div>
          <section>
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
        </div>
      </div>
    )
  }
}
