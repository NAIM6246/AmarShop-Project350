import React, { Component,Fragment } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import { Redirect } from 'react-router';
import ReactHtmlParser from 'react-html-parser';
import Address from './Address';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

class ProductDetails extends Component {

    constructor(props) {
        super(props);
        this.state={
            description:"",
            quantity:"null",
            size:"null",
            id:"",
            price:"null",
            ammount:"null"
           
        }
        
    }

    onSelectSize=()=>{
       var selectedSize=document.getElementById("list").value;
       this.setState({size:selectedSize})

    }
    onQuantityChange=(event)=>{
        this.setState({quantity:event.target.value})

    }

   

    
    
    
     
    render() {
      
       var id=this.props.id;
       var title=this.props.title;
       var imgage=this.props.imgage;
       var  description=this.props.description;
       var ammount=this.props.ammount;
       var price=this.props.price;
      
       var color=this.props.color;
       var sizeArray=this.props.size.split(',');

       var size=sizeArray.map((sizeArray,i)=>{
           return <option>{sizeArray}</option>
       })

       if(sessionStorage.getItem('userName')==null){

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
                                <div className="Product-price-card d-inline ">Price {price}</div>
                               
                               
                            </div>
                          

                            <h6 className="mt-2">Choose Size</h6>
                            <div className="input-group">
                                <div className="form-check ">
                                    <select id="list"onChange={this.onSelectSize} className="form-control form-select">
                                        <option>Choose Size</option>
                                         {size}
                                    </select> 
                                </div>                
                            </div>

                            <h6 className="mt-2">Quantity</h6>
                            <input max={ammount} min="1" onChange={this.onQuantityChange}  className="form-control text-center w-50" type="number" />

                            <div className="input-group mt-3">
                                <button className="btn site-btn m-1 "> <i className="fa fa-shopping-cart"></i>  Add To Cart</button>
                                <Link to={{
                                           pathname:'/onboard',
                                           state:{
                                                id:this.props.productCode
                                           }
                                       }}><button className="btn btn-primary m-1"> <i className="fa fa-car"></i> Order Now</button></Link>   
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
            <ToastContainer></ToastContainer>
        </Container>

    </Fragment>
    );
   }
       else{
          
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
                                        <div className="Product-price-card d-inline ">Price {price}</div>
                                       
                                       
                                    </div>
                                  

                                    <h6 className="mt-2">Choose Size</h6>
                                    <div className="input-group">
                                        <div className="form-check ">
                                            <select id="list"onChange={this.onSelectSize} className="form-control form-select">
                                                <option>Choose Size</option>
                                                 {size}
                                            </select> 
                                        </div>                
                                    </div>

                                    <h6 className="mt-2">Quantity</h6>
                                    <input type="range" max={ammount} min="1" onChange={this.onQuantityChange}  className="form-control text-center w-50" type="number" />

                                    <div className="input-group mt-3">
                                        <button className="btn site-btn m-1 "> <i className="fa fa-shopping-cart"></i>  Add To Cart</button>
                                       <Link  to={{
                                           pathname:'/address',
                                           state:{
                                                id:this.props.productCode,
                                                size:this.state.size,
                                                quantity:this.state.quantity,
                                                price:this.props.price

                                           }
                                       }}><button className="btn btn-primary m-1"> <i className="fa fa-car"></i> Order Now</button>
                                       </Link>
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
            <ToastContainer></ToastContainer>
                </Container>

            </Fragment>
        );
       }
        
    }
}

export default ProductDetails;