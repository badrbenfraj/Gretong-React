import React from 'react'

export class StepOne extends React.Component {
  constructor () {
    super()
    this.state = { 
      firstName: '', 
      lastName: ''
    }
    this.handleFirstNameChanged = this.handleFirstNameChanged.bind(this);
    this.handleLastNameChanged = this.handleLastNameChanged.bind(this);
  }

  handleFirstNameChanged (event) {
    this.setState({firstName: event.target.value})
  }

  handleLastNameChanged (event) {
    this.setState({lastName: event.target.value})
  }

  render () {
    return (
      <div className="checkout-panel ">
        <div className="panel-body">
          <h3 className="title">Billing & Shipping Address</h3>
          <div className="progress-bar-checkout">
            <div className="step checoutActive"></div>
            <div className="step "></div>
            <div className="step"></div>
            <div className="step"></div>
          </div>
          <div className="input-fields">
            <div className="column-1">
              <label htmlFor="cardholder">First Name</label>
              <input type="text" id="cardholder" className="checkoutInput" required="required"/>

              <label htmlFor="cardholder">Address</label>
              <input type="text" id="cardholder" className="checkoutInput" required="required"/>
      
            </div>
            <div className="column-2">
            <label htmlFor="cardholder">Last Name</label>
              <input type="text" id="cardholder" className="checkoutInput"/>
              <label htmlFor="cardholder">Phone Number</label>
              <input type="text" id="cardholder" className="checkoutInput" required="required"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
