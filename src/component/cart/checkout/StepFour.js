import React from 'react'
import {ProductConsumer} from '../../context';
import {Link} from 'react-router-dom';

export class StepFour extends React.Component {
  constructor () {
    super()
    this.state = { 
      checked: '' 
    }
    this.handleCheckedChanged = this.handleCheckedChanged.bind(this);
  }

  handleCheckedChanged (event) {
    this.setState({checked: event.target.checked})
  }

  render () {
    return (
      <div className="checkout-panel ">
        <div className="panel-body">
          <h3 className="title">Finish</h3>
          <div className="progress-bar-checkout">
            <div className="step active"></div>
            <div className="step active"></div>
            <div className="step active"></div>
            <div className="step"></div>
          </div>

          <div className="text-center placeorder">
          <ProductConsumer>
            {value =>{
              const {ClearCart} = value;
              return (<Link to='/place-order'><button className="btn btn-checkout back-btn-checkout" onClick={() =>{ClearCart()}}>
              Place Order
            </button></Link>)
            }}
          </ProductConsumer>  
          </div>  
        </div>
      </div>
    )
  }
}
