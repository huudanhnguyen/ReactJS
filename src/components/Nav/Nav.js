import React, { Component } from 'react';
import {BrowserRouter as Router,Link} from "react-router-dom";
class Nav extends Component {
    render() {
        return (
<div>
  <div className="header-area">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="user-menu">
            <ul>
              <li><a href="#"><i className="fa fa-user" /> My Account</a></li>
              <li><a href="#"><i className="fa fa-heart" /> Wishlist</a></li>
              <li><a href="cart.html"><i className="fa fa-user" /> My Cart</a></li>
              <li><a href="checkout.html"><i className="fa fa-user" /> Checkout</a></li>
              <li><a href="#"><i className="fa fa-user" /> Login</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="header-right">
            <ul className="list-unstyled list-inline">
              <li className="dropdown dropdown-small">
                <a data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle" href="#"><span className="key">currency :</span><span className="value">USD </span><b className="caret" /></a>
                <ul className="dropdown-menu">
                  <li><a href="#">USD</a></li>
                  <li><a href="#">INR</a></li>
                  <li><a href="#">GBP</a></li>
                </ul>
              </li>
              <li className="dropdown dropdown-small">
                <a data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle" href="#"><span className="key">language :</span><span className="value">English </span><b className="caret" /></a>
                <ul className="dropdown-menu">
                  <li><a href="#">English</a></li>
                  <li><a href="#">French</a></li>
                  <li><a href="#">German</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div> {/* End header area */}
  <div className="site-branding-area">
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className="logo">
            <h1><a href="./"><img src="img/logo.png" /></a></h1>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="shopping-item">
            <a href="cart.html">Cart - <span className="cart-amunt">$100</span> <i className="fa fa-shopping-cart" /> <span className="product-count">5</span></a>
          </div>
        </div>
      </div>
    </div>
  </div> {/* End site branding area */}
  <div className="mainmenu-area">
    <div className="container">
      <div className="row">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
        </div> 
        <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop-pages">Shop page</Link></li>
                <li><Link to="/single-page">Single product</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/checkout">Checkout</Link></li>
              </ul>
        </div>  
      </div>
    </div>
  </div> {/* End mainmenu area */}
  <div className="slider-area">
  </div></div>

        );
    }
}

export default Nav;