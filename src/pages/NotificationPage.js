import React, { Component } from 'react';
import { Fragment } from 'react';
import FooterDesktop from '../components/common/FooterDesktop';
import FooterMobile from '../components/common/FooterMobile';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import NavMenuMobile from '../components/common/NavMenuMobile';
import Notification from '../components/notification/Notification';
class NotificationPage extends Component {
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
             <Notification></Notification>
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

export default NotificationPage;