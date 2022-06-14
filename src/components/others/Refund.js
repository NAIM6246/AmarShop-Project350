import React, { Component } from 'react';
import { Fragment } from 'react';
import AppUrl from '../../restAPI/AppUrl';
import ReactHtmlParser from 'react-html-parser';
import { ToastContainer,toast } from 'react-toastify';
import axios from 'axios';
import { Card, Container } from 'react-bootstrap';
class Refund extends Component {

    constructor(props) {
        super(props);
        this.state={
            refund:""
        }
    }
    
        componentDidMount() {
            if(sessionStorage.getItem("siteInfoRefund")==null){
                axios.get(AppUrl.getSiteInfoDetails).then(response=>{
                    if(response.status==200){
                        let Data=(response.data)[0]['terms'];
                        this.setState({refund:Data});
                        sessionStorage.setItem("siteInfoRefund",Data);
                    }
                }).catch(error=>{
                    toast.error("something went wrong!Try again!")
               });
            }
            else{
                this.setState({refund:sessionStorage.getItem("siteInfoRefund")})
            }
    }
    render() {
        return (
            <Fragment className="mt-5">
                <Container className="mt-5">
                <Card>
                    {ReactHtmlParser(this.state.refund)}
                </Card>
                <ToastContainer></ToastContainer>
                </Container>
            </Fragment>
        );
    }
}

export default Refund;