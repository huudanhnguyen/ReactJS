import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
class Home extends Component {
  show_detail=()=>{
    alert('hello');
  }
    render() {
        return (
<div>
  <div className="promo-area">
    <div className="zigzag-bottom" />
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="single-promo promo1">
            <i className="fa fa-refresh" />
            <p>30 Days return</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="single-promo promo2">
            <i className="fa fa-truck" />
            <p>Free shipping</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="single-promo promo3">
            <i className="fa fa-lock" />
            <p>Secure payments</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="single-promo promo4">
            <i className="fa fa-gift" />
            <p>New products</p>
          </div>
        </div>
      </div>
    </div>
  </div> {/* End promo area */}
  <div className="maincontent-area">
    <div className="zigzag-bottom" />
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="latest-product">
            <h2 className="section-title">Latest Products</h2>
            <div className="product-carousel">
              <div className="single-product">
                <div className="product-f-image">
                  <img src="img/product-1.jpg" alt="" />
                  <div className="product-hover">
                    {/* <a href="#" className="add-to-cart-link"><i className="fa fa-shopping-cart" /> Add to cart</a> */}
                    <Link to="/cart"className="add-to-cart-link"><i className="fa fa-shopping-cart"/>Add to cart</Link>
                    <Link to="/single-page"className="view-details-link"><i className="fa fa-link"/>see details</Link>
                  </div>
                </div>
                <h2><a href="single-product.html">Samsung Galaxy s5- 2015</a></h2>
                <div className="product-carousel-price">
                  <ins>$700.00</ins> <del>$100.00</del>
                </div> 
              </div>
              <div className="single-product">
                <div className="product-f-image">
                  <img src="img/product-2.jpg" alt="" />
                  <div className="product-hover">
                    <a href="" className="add-to-cart-link"><i className="fa fa-shopping-cart" /> Add to cart</a>
                    <a href="" onClick={this.show_detail} className="view-details-link"><i className="fa fa-link" /> See details</a>
                  </div>
                </div>
                <h2>Nokia Lumia 1320</h2>
                <div className="product-carousel-price">
                  <ins>$899.00</ins> <del>$999.00</del>
                </div> 
              </div>
              <div className="single-product">
                <div className="product-f-image">
                  <img src="img/product-3.jpg" alt="" />
                  <div className="product-hover">
                    <a href="#" className="add-to-cart-link"><i className="fa fa-shopping-cart" /> Add to cart</a>
                    <a href="single-product.html" className="view-details-link"><i className="fa fa-link" /> See details</a>
                  </div>
                </div>
                <h2>LG Leon 2015</h2>
                <div className="product-carousel-price">
                  <ins>$400.00</ins> <del>$425.00</del>
                </div>                                 
              </div>
              <div className="single-product">
                <div className="product-f-image">
                  <img src="img/product-4.jpg" alt="" />
                  <div className="product-hover">
                    <a href="#" className="add-to-cart-link"><i className="fa fa-shopping-cart" /> Add to cart</a>
                    <a href="single-product.html" className="view-details-link"><i className="fa fa-link" /> See details</a>
                  </div>
                </div>
                <h2><a href="single-product.html">Sony microsoft</a></h2>
                <div className="product-carousel-price">
                  <ins>$200.00</ins> <del>$225.00</del>
                </div>                            
              </div>
              <div className="single-product">
                <div className="product-f-image">
                  <img src="img/product-5.jpg" alt="" />
                  <div className="product-hover">
                    <a href="#" className="add-to-cart-link"><i className="fa fa-shopping-cart" /> Add to cart</a>
                    <a href="single-product.html" className="view-details-link"><i className="fa fa-link" /> See details</a>
                  </div>
                </div>
                <h2>iPhone 6</h2>
                <div className="product-carousel-price">
                  <ins>$1200.00</ins> <del>$1355.00</del>
                </div>                                 
              </div>
              <div className="single-product">
                <div className="product-f-image">
                  <img src="img/product-6.jpg" alt="" />
                  <div className="product-hover">
                    <a href="#" className="add-to-cart-link"><i className="fa fa-shopping-cart" /> Add to cart</a>
                    <a href="single-product.html" className="view-details-link"><i className="fa fa-link" /> See details</a>
                  </div>
                </div>
                <h2><a href="single-product.html">Samsung gallaxy note 4</a></h2>
                <div className="product-carousel-price">
                  <ins>$400.00</ins>
                </div>                            
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> {/* End main content area */}
  <div className="brands-area">
    <div className="zigzag-bottom" />
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="brand-wrapper">
            <div className="brand-list">
              <img src="img/brand1.png" alt="" />
              <img src="img/brand2.png" alt="" />
              <img src="img/brand3.png" alt="" />
              <img src="img/brand4.png" alt="" />
              <img src="img/brand5.png" alt="" />
              <img src="img/brand6.png" alt="" />
              <img src="img/brand1.png" alt="" />
              <img src="img/brand2.png" alt="" />                            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> {/* End brands area */}
  <div className="product-widget-area">
    <div className="zigzag-bottom" />
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="single-product-widget">
            <h2 className="product-wid-title">Top Sellers</h2>
            {/* <a href className="wid-view-more">View All</a> */}
            <Link to="/shop-pages" className="wid-view-more">View All</Link>
            <div className="single-wid-product">
              <a href="single-product.html"><img src="img/product-thumb-1.jpg" alt="" className="product-thumb" /></a>
              <h2><a href="single-product.html">Sony Smart TV - 2015</a></h2>
              <div className="product-wid-rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <div className="product-wid-price">
                <ins>$400.00</ins> <del>$425.00</del>
              </div>                            
            </div>
            <div className="single-wid-product">
              <a href="single-product.html"><img src="img/product-thumb-2.jpg" alt="" className="product-thumb" /></a>
              <h2><a href="single-product.html">Apple new mac book 2015</a></h2>
              <div className="product-wid-rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <div className="product-wid-price">
                <ins>$400.00</ins> <del>$425.00</del>
              </div>                            
            </div>
            <div className="single-wid-product">
              <a href="single-product.html"><img src="img/product-thumb-3.jpg" alt="" className="product-thumb" /></a>
              <h2><a href="single-product.html">Apple new i phone 6</a></h2>
              <div className="product-wid-rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <div className="product-wid-price">
                <ins>$400.00</ins> <del>$425.00</del>
              </div>                            
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="single-product-widget">
            <h2 className="product-wid-title">Recently Viewed</h2>
            <a href="#" className="wid-view-more">View All</a>
            <div className="single-wid-product">
              <a href="single-product.html"><img src="img/product-thumb-4.jpg" alt="" className="product-thumb" /></a>
              <h2><a href="single-product.html">Sony playstation microsoft</a></h2>
              <div className="product-wid-rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <div className="product-wid-price">
                <ins>$400.00</ins> <del>$425.00</del>
              </div>                            
            </div>
            <div className="single-wid-product">
              <a href="single-product.html"><img src="img/product-thumb-1.jpg" alt="" className="product-thumb" /></a>
              <h2><a href="single-product.html">Sony Smart Air Condtion</a></h2>
              <div className="product-wid-rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <div className="product-wid-price">
                <ins>$400.00</ins> <del>$425.00</del>
              </div>                            
            </div>
            <div className="single-wid-product">
              <a href="single-product.html"><img src="img/product-thumb-2.jpg" alt="" className="product-thumb" /></a>
              <h2><a href="single-product.html">Samsung gallaxy note 4</a></h2>
              <div className="product-wid-rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <div className="product-wid-price">
                <ins>$400.00</ins> <del>$425.00</del>
              </div>                            
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="single-product-widget">
            <h2 className="product-wid-title">Top New</h2>
            <a href="#" className="wid-view-more">View All</a>
            <div className="single-wid-product">
              <a href="single-product.html"><img src="img/product-thumb-3.jpg" alt="" className="product-thumb" /></a>
              <h2><a href="single-product.html">Apple new i phone 6</a></h2>
              <div className="product-wid-rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <div className="product-wid-price">
                <ins>$400.00</ins> <del>$425.00</del>
              </div>                            
            </div>
            <div className="single-wid-product">
              <a href="single-product.html"><img src="img/product-thumb-4.jpg" alt="" className="product-thumb" /></a>
              <h2><a href="single-product.html">Samsung gallaxy note 4</a></h2>
              <div className="product-wid-rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <div className="product-wid-price">
                <ins>$400.00</ins> <del>$425.00</del>
              </div>                            
            </div>
            <div className="single-wid-product">
              <a href="single-product.html"><img src="img/product-thumb-1.jpg" alt="" className="product-thumb" /></a>
              <h2><a href="single-product.html">Sony playstation microsoft</a></h2>
              <div className="product-wid-rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <div className="product-wid-price">
                <ins>$400.00</ins> <del>$425.00</del>
              </div>                            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> {/* End product widget area */}
</div>

          
        );
    }
}

export default Home;