import React, { Component,Fragment } from 'react';
import FooterDesktop from '../components/common/FooterDesktop';
import FooterMobile from '../components/common/FooterMobile';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import NavMenuMobile from '../components/common/NavMenuMobile';
import Favourite from '../components/favourite/Favourite';
class FavouritePage extends Component {
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
             <Favourite></Favourite>
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

export default FavouritePage;