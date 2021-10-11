import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Cart from '../Cart/Cart';
import Checkout from '../Checkout/Checkout';
import Home from '../Home/Home';
import ShopPages from '../ShopPages/ShopPages';
import SinglePage from '../SinglePage/SinglePage';
class RouterURL extends Component {
    render() {
        return (
                <div>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/cart" component={Cart}/>
                        <Route exact path="/single-page" component={SinglePage}/>
                        <Route exact path="/shop-pages" component={ShopPages}/>
                        <Route exact path="/checkout" component={Checkout}/>
                        <Route exact path="" component={Home}/>
                    </Switch>
                </div>
        );
    }
}

export default RouterURL;