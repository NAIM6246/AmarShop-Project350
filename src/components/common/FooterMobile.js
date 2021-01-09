import React, { Component,Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
class FooterMobile extends Component {
    render() {
        return (
            <Fragment>
            <div className="card">
            <Container fluid={true}>
                <Row className="px-0 my-5">

                    <Col className="p-2"sm={6} xm={6}>
                        <h5 className="footer-menu-title">SOCIAL LINK</h5>
                        <a href=""><i className="fab m-1 h4 fa-facebook"></i></a>
                        <a href=""><i className="fab m-1 h4 fa-instagram"></i></a>
                        <a href=""><i className="fab m-1 h4 fa-twitter"></i></a>
                    </Col>

                    <Col className="p-2"sm={6} xm={6}>
                     <h5 className="footer-menu-title mt-3">OFFICE ADDRESS</h5><br></br>
                     <p>42,Road no 3,Block B,Surma Abasik, Sylhet<br></br>Phone:01724626044<br></br>shimulsust999@gmail.com</p>   
                    </Col>
                </Row>
            </Container>
            </div>
            <Container fluid={true} className="pt-3 pb-1 bg-dark">
                <Container>
                    <Row className="px-0">
                        <h6 className="text-white">WE DELIVER IN</h6>
                        <p className="footer-text text-white">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>

                    </Row>

                </Container>
            </Container>
        </Fragment>
        );
    }
}

export default FooterMobile;