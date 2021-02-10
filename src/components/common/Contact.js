import axios from 'axios';
import React, { Component,Fragment } from 'react';
import { Container,Row,Col,Card,Button,Form } from 'react-bootstrap';

import AppUrl from '../../restAPI/AppUrl';
import Validation from '../../validation/Validation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Contact extends Component {

    constructor(props) {
        super(props);
        this.state={

            name:"",
            mobile:"",
            message:""
        }
    }
    nameOnChange=(event)=>{
         let clientName=event.target.value;
         this.setState({name:clientName})
    }

    mobileOnChange=(event)=>{
        let clientMobile=event.target.value;
        this.setState({mobile:clientMobile})
   }
    
   messageOnChange=(event)=>{
    let clientMessage=event.target.value;
    this.setState({message:clientMessage})
   }

   formOnSubmit=(event)=>{
       var name =this.state.name;
       var mobile =this.state.mobile;
       var message=this.state.message;
       
       if(name.length==0){
           toast.error("Name required");
       }
       else if(mobile.length==0){
        toast.error("Mobile number required");
       }
       else if(!(Validation.nameRegx).test(name)){
           toast.error("Invalid name");
       }
       else if(!(Validation.mobileRegx).test(mobile)){
           toast.error("Invalid mobile number");
       }
       else if(message.length==0){
           toast.error("message required");
       }
       else{
           let myFormData=new FormData();
           myFormData.append("name",name)
           myFormData.append("mobile",mobile)
           myFormData.append("message",message)
       
           axios.post(AppUrl.getContactDetails,myFormData).then(function(response){
               if(response.status==200 && response.data==1){
                   toast.success("Success")
               }
               else{
                   toast.error("Oops!Please Check Your Internet Connection")
               }
           }).catch(function(error){
               toast.error("error")
           })
        }
         event.preventDefault();
      
   
   }
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                        <Form  onSubmit={this.formOnSubmit} >
                                            <h4>Contact With Us</h4>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control onChange={this.nameOnChange}type="text" placeholder="Your name" />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Mobile Number</Form.Label>
                                                <Form.Control onChange={this.mobileOnChange}type="text" placeholder="Your mobile number" />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Your message</Form.Label>
                                                <Form.Control onChange={this.messageOnChange}type="text" placeholder="Type your message" />
                                            </Form.Group>
                                            <Button type="submit" variant="primary">Send</Button>
                                        </Form>
                                  
                                </Card.Body>
                            </Card>
                        </Col>
                        
                        <Col lg={6} md={6} sm={12} xs={12}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28949.956231055476!2d91.84683634491654!3d24.906694356088675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3750556002144eab%3A0xe277e14dbca9f2ab!2sShahjalal%20University%20of%20Science%20and%20Technology%2C%20Sylhet!5e0!3m2!1sen!2sbd!4v1608019632893!5m2!1sen!2sbd" width="600" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </Col>
                    </Row>
                    <ToastContainer></ToastContainer>
                </Container>
            </Fragment>
        );
    }
}

export default Contact;