import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppUrl from '../../restAPI/AppUrl';
import ReactHtmlParser from 'react-html-parser';
import { ToastContainer,toast } from 'react-toastify';
import axios from 'axios';

class FooterDesktop extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            footerData:"",
            address:"",
            deliveryNotice:"",
            androidAppLink:"",
            iosAppLink:"",
            facebookLink:"",
            twitterLink:"",
            instagramLink:"",
            aboutCompany:""
        }
    }
       
        componentDidMount() {
             axios.get(AppUrl.getSiteInfoDetails).then(response=>{
                if(response.status==200){
                   let Data=(response.data)[0];
                   this.setState({footerData:Data});
                   this.setState({
                         address:Data['address'],
                         deliveryNotice:Data['deliveryNotice'],
                         androidAppLink:Data['androidAppLink'],
                         iosAppLink:Data['iosAppLink'],
                         facebookLink:Data['facebookLInk'],
                         twitterLink:Data['twitterLink'],
                         instagramLink:Data['instagramLink'], 
                         aboutCompany:Data['aboutCompany']
                        });
                      
                    }
                }).catch(error=>{
               });
            }
    render() {
        return (
            <Fragment>
                <div className="card">
                <Container fluid={true}>
                    <Row className="px-0 my-5">

                        <Col className="p-2" lg={3} md={3} sm={6} xm={12}>
                            <h5 className="footer-menu-title">ABOUT COMPANY</h5>
                            {ReactHtmlParser(this.state.aboutCompany)}
                            <h5 className="footer-menu-title">SOCIAL LINK</h5>
                            <a href={this.state.androidAppLink}><i className="fab m-1 h4 fa-facebook"></i></a>
                            <a href={this.state.instagramLink}><i className="fab m-1 h4 fa-instagram"></i></a>
                            <a href={this.state.twitterLink}><i className="fab m-1 h4 fa-twitter"></i></a>
                        </Col>
                        
                        <Col className="p-2" lg={3} md={3} sm={6} xm={12}>
                         <h5 className="footer-menu-title">THE COMPANY</h5>
                         <Link to="/about" className="footer-link">About Us</Link><br></br>
                         <Link to="/contact" className="footer-link">Contact Us</Link><br></br>
                        
                         <h5 className="footer-menu-title mt-3">OFFICE ADDRESS</h5><br></br>
                         <p>{ReactHtmlParser(this.state.address)}</p>   
                        </Col>

                        <Col className="p-2" lg={3} md={3} sm={6} xm={12}>
                            <h5 className="footer-menu-title">MORE INFO</h5>
                            <Link to="/purchase" className="footer-link">How to Purchase<br></br></Link>
                            <Link to="/policy" className="footer-link">Privacy Policy</Link><br></br>
                            <Link to="/refund" className="footer-link">Refund Policy<br></br></Link>
                        </Col>

                        <Col className="p-2"lg={3} md={3} sm={6} xm={12}>
                        <h5 className="footer-menu-title">DOWNLOAD APP</h5>
                        <a href={this.state.androidAppLink}><img src="images/apple.png"></img></a><br></br>
                        <a href={this.state.iosAppLink}><img className="mt-2"src="images/android.png"></img></a>
                        </Col>
                    </Row>
                </Container>
                </div>
                <Container fluid={true} className="pt-3 pb-1 bg-dark">
                    <Container>
                        <Row className="px-0">
                            <h6 className="text-white text-center">WE DELIVER IN</h6><br></br>
                        </Row>
                        <Row>
                        <p className="footer-text text-white">{this.state.deliveryNotice}</p>
                        </Row>

                    </Container>
                    <ToastContainer></ToastContainer>
                </Container>
            </Fragment>
        );
    }
}

export default FooterDesktop;