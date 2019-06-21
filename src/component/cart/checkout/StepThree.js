import React from 'react';
import $ from 'jquery';


export class StepThree extends React.Component {
  constructor () {
    super()
    this.state = { 
      password: '', 
      passwordConfirm: '' 
    }
    this.handlePasswordChanged = this.handlePasswordChanged.bind(this);
    this.handlePasswordConfirmChanged = this.handlePasswordConfirmChanged.bind(this);
  }

  handlePasswordChanged (event) {
    this.setState({password: event.target.value})
  }

  handlePasswordConfirmChanged (event) {
    this.setState({passwordConfirm: event.target.value})
  }
  componentDidMount = () => {
    $(document).ready(function() {

      // Radio box border
      $('.method').on('click', function() {
        $('.method').removeClass('blue-border');
        $(this).addClass('blue-border');
      });
    
      // Validation
      var $cardInput = $('.input-fields input');
    
      $('.next-btn').on('click', function(e) {
    
        $cardInput.removeClass('warning');
    
        $cardInput.each(function() {
           var $this = $(this);
    
           if (!$this.val()) {
             $this.addClass('warning');
           }
        });
    
      });
    
    });

  }

  render () {
    return (
        <div className="checkout-panel ">
          <div className="panel-body">
            <h3 className="title">Payment</h3>
            <div className="progress-bar-checkout">
              <div className="step active"></div>
              <div className="step active"></div>
              <div className="step"></div>
              <div className="step"></div>
            </div>
            <div className="payment-method">
              <label htmlFor="card" className="method card">
                <div className="card-logos">
                  <img src="img/visa_logo.png" alt=""/>
                  <img src="img/mastercard_logo.png" alt=""/>
                </div>
                <div className="radio-input">
                  <input id="card" type="hidden" name="payment"/>
                  {"   "}Pay $340.00 with credit card
                </div>
              </label>
        
              <label htmlFor="paypal" className="method paypal">
                <img src="img/paypal_logo.png" alt=""/>
                <div className="radio-input">
                  <input id="paypal" type="hidden" name="payment"/>
                  {"   "}Pay $340.00 with PayPal
                </div>
              </label>
            </div>
        
            <div className="input-fields">
              <div className="column-1">
                <label htmlFor="cardholder">Cardholder's Name</label>
                <input type="text" id="cardholder" className="checkoutInput"/>
        
                <div className="small-inputs">
                  <div>
                    <label htmlFor="date">Valid thru</label>
                    <input type="text" id="date" placeholder="MM / YY" className="checkoutInput"/>
                  </div>
        
                  <div>
                    <label htmlFor="verification">CVV / CVC *</label>
                    <input type="password" id="verification" className="checkoutInput"/>
                  </div>
                </div>
        
              </div>
              <div className="column-2">
                <label htmlFor="cardnumber">Card Number</label>
                <input type="password" id="cardnumber" className="checkoutInput"/>
        
                <span className="info">* CVV or CVC is the card security code, unique three digits number on the back of your card separate from its number.</span>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
