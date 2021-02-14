import React, { Component,Fragment } from 'react';
import FooterDesktop from '../components/common/FooterDesktop';
import FooterMobile from '../components/common/FooterMobile';

import NavMenuDesktop from '../components/common/NavMenuDesktop';
import Cart from '../components/productDetails/Cart';

class CartPage extends Component {
    render() {
        return (
            <Fragment>
            <div className="desktop">
            <NavMenuDesktop></NavMenuDesktop>
         </div>
           <div>
               <Cart></Cart>
           </div>
           
         <div className="desktop">
            <FooterDesktop></FooterDesktop>
         </div>
         
         <div className="mobile">
            <FooterMobile></FooterMobile>
         </div>   
         
        </Fragment>
        );
    }
}

export default CartPage;    