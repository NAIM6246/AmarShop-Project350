import React, { Component,Fragment } from 'react';
import { Switch, Route } from 'react-router';
import AboutPage from '../pages/AboutPage';
import CartPage from '../pages/CartPage';
import ContactPage from '../pages/ContactPage';
import FavouritePage from '../pages/FavouritePage';
import HomePage from '../pages/HomePage';
import NotificationPage from '../pages/NotificationPage';
import OrderPage from '../pages/OrderPage';
import PolicyPage from '../pages/PolicyPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import PurchasePage from '../pages/PurchasePage';
import RefundPage from '../pages/RefundPage';
import TeamPage from '../pages/TeamPage';
import UserOnboardPage from '../pages/UserOnboardPage';

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
               <Switch>
                   <Route  exact path="/" component={HomePage}/>
                   <Route exact path="/onboard" component={UserOnboardPage}></Route>
                   <Route exact path="/contact" component={ContactPage}></Route>
                   <Route exact path="/purchase" component={PurchasePage}></Route>
                   <Route exact path="/refund" component={RefundPage}></Route>
                   <Route exact path="/policy" component={PolicyPage}></Route>
                   <Route exact path="/about" component={AboutPage}></Route>
                   <Route exact path="/team" component={TeamPage}></Route>
                   <Route exact path="/productDetails" component={ProductDetailsPage}></Route>
                   <Route exact path="/notification" component={NotificationPage}></Route>
                   <Route exact path="/favourite" component={FavouritePage}></Route>
                   <Route exact path="/cart" component={CartPage}></Route>
                   <Route exact path="/order" component={OrderPage}></Route>
                
                
               </Switch> 
            </Fragment>
        );
    }
}

export default AppRoute;