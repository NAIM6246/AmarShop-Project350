import React, { Component } from 'react';
import { Fragment } from 'react';
import AppUrl from '../../restAPI/AppUrl';
import ReactHtmlParser from 'react-html-parser';
import { ToastContainer,toast } from 'react-toastify';
import axios from 'axios';
import { Card, Container } from 'react-bootstrap';
class Purchase extends Component {

    constructor(props) {
        super(props);
        this.state={
            purchase:""
        }
    }
    
    
        componentDidMount() {
            if(sessionStorage.getItem("siteInfoPurchase")==null){
                axios.get(AppUrl.getSiteInfoDetails).then(response=>{
                    if(response.status==200){
                        let Data=(response.data)[0]['purchase'];
                        this.setState({purchase:Data});
                        sessionStorage.setItem("siteInfoPurchase",Data);
                    }
                }).catch(error=>{
                    toast.error("something went wrong!Try again!")
               });
            }
            else{
                this.setState({purchase:sessionStorage.getItem("siteInfoPurchase")})
            }
    }
    render() {
        return (
             
            <Fragment className="mt-5">
            <Container className="mt-5">
            <Card>
                {ReactHtmlParser(this.state.purchase)}
            </Card>
            
            <ToastContainer></ToastContainer>
            </Container>
        </Fragment>
        );
    }
}

export default Purchase;