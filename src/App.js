import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import Cart from './component/cart';
import Details from './component/details';
import NotFoundPage from './component/notfound';
import ProductList from './component/product_list';
import Header from './component/header/header';
import Home from './component/home';
import Login from './component/login';
import Register from './component/register'
import Checkout from './component/cart/checkout'

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import Footer from './component/footer/footer';
import ModalShop from './component/modal';
import Contact from './component/Contact/contact';
import About from './component/about-us/about';
import Career from './component/about-us/career';
import Press from './component/about-us/press';
import Delivery from './component/about-us/delivery';
import HowToBuy from './component/about-us/how-to-buy';
import ForgotPassword from './component/forgot-password';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/new-arrivals" component={ProductList}/>
          <Route path="/details" component={Details}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/our-story" component={About}/>
          <Route path="/career" component={Career}/>
          <Route path="/press" component={Press}/>
          <Route path="/delivery" component={Delivery}/>
          <Route path="/how-to-buy" component={HowToBuy}/>
          <Route path="/forgot-password" component={ForgotPassword}/>
          <Route path="/checkout" component={Checkout}/>
          <Route component={NotFoundPage}/>
        </Switch>
        <Footer/>
        <ModalShop/>
      </React.Fragment>
    );
  }
}

export default App;
