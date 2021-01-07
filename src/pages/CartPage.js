import React, { Component,Fragment } from 'react';
import CartList from '../components/cart/CartList';
import FooterDesktop from '../components/common/FooterDesktop';
import FooterMobile from '../components/common/FooterMobile';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import NavMenuMobile from '../components/common/NavMenuMobile';
class CartPage extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }
    
    render() {
        return (
            <Fragment>
            <div className="desktop">
            <NavMenuDesktop></NavMenuDesktop>
         </div>

         <div className="mobile">
            <NavMenuMobile></NavMenuMobile>
         </div>
           <div>
            <CartList></CartList>
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