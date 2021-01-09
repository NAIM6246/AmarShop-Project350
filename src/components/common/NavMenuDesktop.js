import React, { Component } from 'react';
import { Fragment } from 'react';
import { Button, Col, Container, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';



class NavMenuDesktop extends Component {
    render() {
        return (
            <Fragment>
                 
                 <Navbar fixed={"top"} bg="light" className="navbar">
                
                 <Container>
                     <Row>
                         <Col lg={4} md={4} sm={12} xs={12} >
                            <a href="#" className="btn"><img className="nav-logo" src="images/slideLogo.jpg"></img></a> 
                            <Button className="cart-btn"> <i className="fa fa-shopping-cart"></i>4 items</Button>  
                         </Col>
                         <Col lg={4} md={4} sm={12} xs={12} >
                             <div className="input-group w-100">
                                 <input type="text" className="form-control" aria-label="Text input with segmented dropdown button"></input>
                                 <Button type="button" className="btn site-btn"><i className="fa fa-search"></i></Button>
                             </div>
                         </Col>
                         <Col lg={4} md={4} sm={12} xs={12} >
                             <a className="btn"><i className="fa h4 fa-heart"></i><sup><span className="badge bg-danger">4</span></sup></a>
                             <a className="btn"><i className="fa h4 fa-bell"></i><sup><span className="badge bg-danger">4</span></sup></a>
                             <a className="btn"><i className="fa h4 fa-mobile-alt"></i><sup><span className="badge bg-danger"></span></sup></a>
                             <Link to="/onboard" className="h4 btn">LOGIN</Link>
                         </Col>
                     </Row>
                 </Container>
                 </Navbar>
            </Fragment>
        );
    }
}

export default NavMenuDesktop;