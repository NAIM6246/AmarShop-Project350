import React, { Component, Fragment } from 'react';
import { Col,Container,Row ,Button, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import MegaMenuMobile from '../home/MegaMenuMobile';

class NavMenuMobile extends Component {
    constructor() {
        super();
        this.state={
            SideNav:"sideNavClose",
            ContentOverlay:"contentOverlayClose"
        }
        this.MenuBarClickHandler=this.MenuBarClickHandler.bind(this);
        this.ContentOverLayClickHandler=this.ContentOverLayClickHandler.bind(this); 
        this.SideNavOpenClose=this.SideNavOpenClose.bind(this);       
    }
    MenuBarClickHandler=()=>{
        this.SideNavOpenClose();
    }
    ContentOverLayClickHandler=()=>{
        this.SideNavOpenClose();
    }
    SideNavOpenClose=()=>{
       var SideNavState=this.state.SideNav;
       var ContentOverState=this.state.ContentOverlay;
       if(SideNavState==="sideNavOpen"){
           this.setState({SideNav:"sideNavClose"});
           this.setState({ContentOverlay:"contentOverlayClose"});
       }
       else{
           this.setState({SideNav:"sideNavOpen"});
           this.setState({ContentOverlay:"contentOverlayOpen"});
       }
    }
    render() {
        return (
            <Fragment>
                 <Container>
                <h3 id="google_translate_element"></h3>
                </Container>
                
                <Navbar fluid={true} className="fixed-top shadow-sm p-2 m-0 bg-white">
                     
                        <a onClick={this.MenuBarClickHandler} className=" mx-2 navbar-brand"><i className="fa fa-bars"></i></a>
                        <Button className="cart-btn"><i className="fa fa-shopping-cart"></i>4 items</Button>
                        <Link to="/favourite" className="btn"><i className="fa h4 fa-heart"></i><sup><span className="badge text-white bg-danger">4</span></sup></Link>
                       <Link to="/notification"  className="btn"><i className="fa h4 fa-bell"></i><sup><span className="badge text-white bg-danger">4</span></sup></Link>
                        <a href="" className="btn"><i className="fa h4 fa-search"></i></a>
                        <div id="google_translate_element"></div>
                </Navbar>
                <div className={this.state.SideNav}>
                    <a href="" className="btn"><img className="nav-logo" src="images/slideLogo.jpg"></img></a>
                    <hr></hr>
                    <MegaMenuMobile></MegaMenuMobile>
                </div>
                <div onClick={this.ContentOverLayClickHandler} className={this.state.ContentOverlay}>

                </div>
                
            </Fragment>
        );
    }
}
export default NavMenuMobile;