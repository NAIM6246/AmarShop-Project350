import React, { Component,Fragment } from 'react';
import { Container,Row,Col,Card,Button,Form } from 'react-bootstrap';
import axios from 'axios';
import ProductDetails from './ProductDetails';
import { ToastContainer, toast } from 'react-toastify';
import AppUrl from '../../restAPI/AppUrl';

class Address extends Component {

    constructor(props) {
        super(props);
        this.state={
            address:""
        }
       
    }

    addressOnChange=(event)=>{
        let clientAddress=event.target.value;
        this.setState({address:clientAddress})
   }
   /*eikhane password ke dhora hoise */
   
   /*login button e click korle ei function kaaj korbe */
   formOnSubmit=(event)=>{
    var Customer=sessionStorage.getItem('userName')
    var numberOfProduct=this.props.quantity;
    var price=this.props.quantity*this.props.price;
    var address=this.state.address;
    var productId=this.props.id;
    var size=this.props.size;
    let contactForm=document.getElementById("myForm");
    
    if(address.length==0){
        toast.error("Address required");
    }
    else{
        
        /* naam r password ke ekta form data r maddome pathano hoise, eikhane Url hoilo localhost:3000/getLoginDetails */

        const data = JSON.stringify(
            {
                "mobile" : "01724353535",
                "count" : parseInt( numberOfProduct,10),
                "size" : size,
                "price" : parseInt( price,10),
                "address" : address,
                "pid" : parseInt( productId,10)
            }
        )

        
        //parsing json object


        

        axios.post(AppUrl.confirmOrder,data).then(function(response){
           // toast.success("dhukse")
            if(response.status==201){
             //   toast.success("ok")
                sessionStorage.setItem('userName',Customer)
                toast.success("Success")
                contactForm.reset()
            }
            else{
                toast.error("Oops!Please Check Your Internet Connection")
            }
        }).catch(error=>{
            console.log(error);
        })
     }
      event.preventDefault();
 }
   
    
   
    

    render() {
        return (
          <Fragment>
          
          <Container className="p-5 mt-5 ">
              <br></br>
              <br></br>
             <Row>
                 <Col lg={12} md={12} sm={8} xs={12}>
                     <Card fluid={true} className="text-center">
                         <h3>Total number of product {this.props.quantity}</h3>
                         <br></br>
                         <h3>Total Price{this.props.price*this.props.quantity}</h3>
                         <Card.Body>
                                 <Form  id="myForm" onSubmit={this.formOnSubmit}>
                                     <Form.Group controlId="formBasicEmail">
                                         <Form.Label>Address</Form.Label>
                                         <Form.Control onChange={this.addressOnChange} type="text" placeholder="Address" />
                                     </Form.Group>
                                     <Button type="submit" variant="primary">Confirm Order</Button>
                                 </Form>
                 
                       

                         </Card.Body>
                     </Card>
                 </Col>
             </Row>
             <ToastContainer></ToastContainer>
         </Container>
     </Fragment>
        );
    }
}

export default Address;