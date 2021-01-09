import React, { Component,Fragment } from 'react';
import { Switch, Route } from 'react-router';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import PolicyPage from '../pages/PolicyPage';
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

                
                
               </Switch> 
            </Fragment>
        );
    }
}

export default AppRoute;