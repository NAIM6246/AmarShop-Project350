import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MegaMenu from "./MegaMenu";
import SliderHome from "./SliderHome";
import axios from 'axios';
import AppUrl from '../../restAPI/AppUrl';
import { ToastContainer,toast } from 'react-toastify';
class HomeTop extends Component {

    constructor(props){
        super(props);
        this.state={
            categoryData:[]
        }
    }
    
    componentDidMount() {
       
            axios.get(AppUrl.getCategoryDetails).then(response=>{
                if(response.status==200){
                   
                    let Data=(response.data);
                    this.setState({categoryData:Data});
                }
            }).catch(error=>{
                toast.error("something went wrong!Try again!")
           });
    }
    
    render() {
        return (
            <Fragment>
                <Container className="p-0 m-0 overflow-hidden"fluid={true}>
                    <Row  className="p-0 m-0 overflow-hidden">
                        <Col className="p-0 m-0 overflow-hidden" lg={3} md={3} sm={12}>
                           <MegaMenu Data={this.state.categoryData} ></MegaMenu>
                            
                        </Col>
                        <Col className="p-0 m-0 overflow-hidden" lg={9} md={9} sm={12}>
                           <SliderHome></SliderHome>
                        </Col>
                    </Row>
                    <ToastContainer></ToastContainer>
                </Container>
            </Fragment>
        );
    }
}

export default HomeTop;