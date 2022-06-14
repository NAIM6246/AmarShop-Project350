import axios from 'axios';
import React, { Component } from 'react';
import { Fragment } from 'react';
import { Card,Container } from 'react-bootstrap';
import AppUrl from '../../restAPI/AppUrl';
import ReactHtmlParser from 'react-html-parser';
import { ToastContainer,toast } from 'react-toastify';
class About extends Component {

    constructor(props) {
        super(props);
        this.state={
            about:""
        }
    }
    
        componentDidMount() {
            if(sessionStorage.getItem("siteInfoAbout")==null){
                axios.get(AppUrl.getSiteInfoDetails).then(response=>{
                    if(response.status==200){
                        let Data=(response.data)[0]['about'];
                        this.setState({about:Data});
                        sessionStorage.setItem("siteInfoAbout",Data);
                    }
                }).catch(error=>{
                    toast.error("something went wrong!Try again!")
               });
            }
            else{
                this.setState({about:sessionStorage.getItem("siteInfoAbout")})
            }
    }
    
    render() {
        return (
            <Fragment className="mt-5">
                <Container className="mt-5">
                <Card>
                    {ReactHtmlParser(this.state.about)}
                </Card>
                <ToastContainer></ToastContainer>
                </Container>
            </Fragment>
        );
    }
}

export default About;