import React, { Component,Fragment } from 'react';
import { Container,Row,Col,Card,Button,Form } from 'react-bootstrap';
import AppUrl from '../../restAPI/AppUrl';
import Validation from '../../validation/Validation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Redirect } from 'react-router';


class Registration extends Component {


    /**name,mobile,address,email,password ei naam gula diya value input zaabe r url setup dibi eirkom "localhost:8000/api/getRegistrationDetails" zodi url change korte chaas taile restAPI folder e AppRrl.js e giya change korish*/
    constructor(props) {
        super(props);
        this.state={
            name:"",
            mobile:"",
            address:"",
            email:"",
            password:"",
            redirect:false
          
    
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
    emailOnChange=(event)=>{
        let clientEmail=event.target.value;
        this.setState({email:clientEmail})
    }
    passwordOnChange=(event)=>{
        let clientPassword=event.target.value;
        this.setState({password:clientPassword})
    }
    addressOnChange=(event)=>{
    let clientAddress=event.target.value;
    this.setState({address:clientAddress})
    }

   formOnSubmit=(event)=>{
       var name =this.state.name;
       var mobile =this.state.mobile;
       var address=this.state.address;
       var email=this.state.email;
       var password=this.state.password;
       let contactForm=document.getElementById("myForm");
       
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
       else if(!(Validation.emailRegx).test(email)){
        toast.error("Invalid Email");
       }
       else if(password.length<8){
           toast.error("Minimum 8 digit is required!");
       }
       else if(address.length==0){
        toast.error("Address required");
    }
       else{
       
           let myFormData=new FormData();
           myFormData.append("name",name)
           myFormData.append("mobile",mobile)
           myFormData.append("email",email)
           myFormData.append("password",password)
           myFormData.append("address",address)
           {/*let object = {};
           myFormData.forEach(function(value, key){
                object[key] = value;
           });
           const json = JSON.stringify(object);
        */}
           axios.post(AppUrl.getRegistrationDetails,myFormData).then(function(response){
               if(response.status==200 && response.data==1){
                sessionStorage.setItem('userName',1)
                
                toast.success("Success").then(window.location.replace('/'))

                   contactForm.reset();
               }
               else{
                  toast.error("Oops!Please Check Your Internet Connection")
               }
           }).catch(function(error){

           })
       }
         event.preventDefault();
    }
    render() {
        return (
            <Fragment>
                 <Container className="p-5">
                    <Row>
                        <Col lg={4} md={4} sm={8} xs={12}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                        <Form  id="myForm" onSubmit={this.formOnSubmit}>
                                        <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control onChange={this.nameOnChange} type="text" placeholder="Your Name" />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Mobile Number</Form.Label>
                                                <Form.Control onChange={this.mobileOnChange} type="text" placeholder="Your mobile number" />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control onChange={this.emailOnChange} type="text" placeholder="Your Email" />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control onChange={this.passwordOnChange} type="text" placeholder="Your Password" />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Address</Form.Label>
                                                <Form.Control onChange={this.addressOnChange} type="text" placeholder="Address" />
                                            </Form.Group>
                                            <Button type="submit" variant="primary">Register</Button>
                                        </Form>
                        
                              

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Registration;