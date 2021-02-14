import React, { Component,Fragment } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import { Redirect } from 'react-router';
import ReactHtmlParser from 'react-html-parser';
class ProductDetails extends Component {

    constructor(props) {
        super(props);
        this.state={
            description:""
           
        }
        
    }
    

    onOrderClick=()=>{
        if(sessionStorage.getItem('userName')==null){
             window.location.replace('/onboard')
        }
        else{
            window.location.replace('/address')
        }
    }
    
    onSize=(event)=>{
       let size=event.target.value;
       alert(size)
    }
    
     
    render() {

      
       let id=this.props.id;
       let title=this.props.title;
       let imgage=this.props.imgage;
       let  description=this.props.description;
       let color=this.props.color;
       let sizeArray=this.props.size.split(',');

       var size=sizeArray.map((sizeArray,i)=>{
           return <option>{sizeArray}</option>
       })

       
        return (
            <Fragment>
                <Container  className="BetweenTwoSection mt-5">
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white pb-3 mt-4" md={12} lg={12} sm={12} xs={12}>
                            <Row>
                                <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
                                    <img className="w-100" src="Images/p2.jpg"/>
                                   
                                </Col>
                                <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                                    <h5 className="Product-Name">{title}</h5>
                                    <h6 className="section-sub-title">Some Of Our Exclusive Collection, You May Like Some Of Our Exclusive Collectio</h6>
                                    <div className="input-group">
                                        <div className="Product-price-card d-inline ">Price 200</div>
                                       
                                       
                                    </div>
                                  

                                    <h6 className="mt-2">Choose Size</h6>
                                    <div className="input-group">
                                        <div    onSelect={this.onSize} className="form-check ">
                                            <select className="form-control form-select">
                                                <option>Choose Size</option>
                                                {size}
                                            </select> 
                                        </div>                
                                    </div>

                                    <h6 className="mt-2">Quantity</h6>
                                    <input  className="form-control text-center w-50" type="number" />

                                    <div className="input-group mt-3">
                                        <button className="btn site-btn m-1 "> <i className="fa fa-shopping-cart"></i>  Add To Cart</button>
                                        <button onClick={this.onOrderClick}className="btn btn-primary m-1"> <i className="fa fa-car"></i> Order Now</button>   
                                    </div>
                                </Col>
                            </Row>
                           
                            <Row>
                                <Col className="" md={12} lg={12} sm={12} xs={12}>
                                    <h6 className="mt-2">DETAILS</h6>
                                    {ReactHtmlParser(description)}
                                    
                                </Col>
                               
                            </Row>

                        </Col>
                    </Row>
                  
                </Container>

            </Fragment>
        );
    }
}

export default ProductDetails;