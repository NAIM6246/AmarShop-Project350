import React, { Component } from 'react';
import { Fragment } from 'react';
import AppUrl from '../../restAPI/AppUrl';
import ReactHtmlParser from 'react-html-parser';
import { ToastContainer,toast } from 'react-toastify';
import axios from 'axios';
import { Card, Container } from 'react-bootstrap';
class Policy extends Component {

    constructor(props) {
        super(props);
        this.state={
            policy:""
        }
    }
    
    
        componentDidMount() {
            if(sessionStorage.getItem("siteInfoPolicy")==null){
                axios.get(AppUrl.getSiteInfoDetails).then(response=>{
                    if(response.status==200){
                        let Data=(response.data)[0]['policy'];
                        this.setState({policy:Data});
                        sessionStorage.setItem("siteInfoPolicy",Data);
                    }
                }).catch(error=>{
                    toast.error("something went wrong!Try again!")
               });
            }
            else{
                this.setState({policy:sessionStorage.getItem("siteInfoPolicy")})
            }
    }
    render() {
        return (
            
            <Fragment className="mt-5">
            <Container className="mt-5">
            <Card>
                {ReactHtmlParser(this.state.policy)}
            </Card>
            
            <ToastContainer></ToastContainer>
            </Container>
        </Fragment>
        );
    }
}

export default Policy;