import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class FooterDesktop extends Component {

    
    render() {
        return (
            <Fragment>
                <div className="card">
                <Container fluid={true}>
                    <Row className="px-0 my-5">

                        <Col className="p-2" lg={3} md={3} sm={6} xm={12}>
                            <h5 className="footer-menu-title">ABOUT COMPANY</h5>
                            <p>BigExpress is considered to be the ‘game-changer’ in Bangladesh’s industry. Carefully-chosen raw material, environment-friendly business practice and customer-centric approach is what made BigExpress a beloved brand at home and abroad.</p>
                            <h5 className="footer-menu-title">SOCIAL LINK</h5>
                            <a href=""><i className="fab m-1 h4 fa-facebook"></i></a>
                            <a href=""><i className="fab m-1 h4 fa-instagram"></i></a>
                            <a href=""><i className="fab m-1 h4 fa-twitter"></i></a>
                        </Col>
                        
                        <Col className="p-2" lg={3} md={3} sm={6} xm={12}>
                         <h5 className="footer-menu-title">THE COMPANY</h5>
                         <Link to="/about" className="footer-link">About Us</Link><br></br>
                         <Link to="/contact" className="footer-link">Contact Us</Link><br></br>
                         <Link to="/team" className="footer-link">Our Team</Link><br></br>
                         <h5 className="footer-menu-title mt-3">OFFICE ADDRESS</h5><br></br>
                         <p>42,Road no 3,Block B,Surma Abasik, Sylhet<br></br>Phone:01724626044<br></br>shimulsust999@gmail.com</p>   
                        </Col>

                        <Col className="p-2" lg={3} md={3} sm={6} xm={12}>
                            <h5 className="footer-menu-title">MORE INFO</h5>
                            <Link to="/purchase" className="footer-link">How to Purchase<br></br></Link>
                            <Link to="/policy" className="footer-link">Privacy Policy</Link><br></br>
                            <Link to="/refund" className="footer-link">Refund Policy<br></br></Link>
                        </Col>

                        <Col className="p-2"lg={3} md={3} sm={6} xm={12}>
                        <h5 className="footer-menu-title">DOWNLOAD APP</h5>
                        <a href=""><img src="images/apple.png"></img></a><br></br>
                        <a href=""><img className="mt-2"src="images/android.png"></img></a>
                        </Col>
                    </Row>
                </Container>
                </div>
                <Container fluid={true} className="pt-3 pb-1 bg-dark">
                    <Container>
                        <Row className="px-0">
                            <h6 className="text-white">WE DELIVER IN</h6>
                            <p className="footer-text text-white">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>

                        </Row>

                    </Container>
                </Container>
            </Fragment>
        );
    }
}

export default FooterDesktop;