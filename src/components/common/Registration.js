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
            mobilenumber:"",
            address:"",
            email:"",
            pass:"",
            redirect:false
    
        }
    }
    nameOnChange=(event)=>{
         let clientName=event.target.value;
         this.setState({name:clientName})
    }

    mobileOnChange=(event)=>{
        let clientMobile=event.target.value;
        this.setState({mobilenumber:clientMobile})
    }
    emailOnChange=(event)=>{
        let clientEmail=event.target.value;
        this.setState({email:clientEmail})
    }
    passwordOnChange=(event)=>{
        let clientPassword=event.target.value;
        this.setState({pass:clientPassword})
    }
    addressOnChange=(event)=>{
    let clientAddress=event.target.value;
    this.setState({address:clientAddress})
    }

   formOnSubmit=(event)=>{
       var name =this.state.name;
       var mobilenumber =this.state.mobilenumber;
       var address=this.state.address;
       var email=this.state.email;
       var pass=this.state.pass;
       let contactForm=document.getElementById("myForm");
       
       if(name.length==0){
           toast.error("Name required");
       }
       else if(mobilenumber.length==0){
        toast.error("Mobile number required");
       }
       else if(!(Validation.nameRegx).test(name)){
           toast.error("Invalid name");
       }
       else if(!(Validation.mobileRegx).test(mobilenumber)){
           toast.error("Invalid mobile number");
       }
       else if(!(Validation.emailRegx).test(email)){
        toast.error("Invalid Email");
       }
       else if(pass.length<8){
           toast.error("Minimum 8 digit is required!");
       }
       else if(address.length==0){
        toast.error("Address required");
    }
       else{
           let myFormData=new FormData();
           myFormData.append("name",name)
           myFormData.append("mobilenumber",mobilenumber)
           myFormData.append("email",email)
           myFormData.append("pass",pass)
           myFormData.append("address",address)
        //convrting form to json

           let object = {};
           myFormData.forEach(function(value,key){
               object[key] = value;
           });
           const json =  JSON.stringify(object)

           //
           axios.post(AppUrl.getRegistrationDetails,json).then(function(response){
            //toast.
              // toast.success("Entered")
               if(response.status==201 /*&& response.data == 1*/){
                   toast.success("Success")
                   contactForm.reset()
               }
               else{
                   toast.error("Oops!Please Check Your Internet Connection")
               }
           }).catch(function(error){
               console.log(error)
               toast.error("error")
           })
        }
         event.preventDefault();
    }

    //to hide & show pass
    state = {
        isPassShown : false
    }

    toggleShowPass =() =>{
        const {isPassShown} = this.state;
        this.setState({  isPassShown : !isPassShown  });
    }

    render() {
        const{ isPassShown } = this.state
        return (
            <Fragment>
                 <Container className="p-5">
                    <Row>
                        <Col lg={4} md={4} sm={8} xs={12}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                        <Form  id="myForm" method="post" onSubmit={this.formOnSubmit} >
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
                                                <Form.Control onChange={this.passwordOnChange} type={(isPassShown) ? "text" : "password" } placeholder="Your Password" />
                                                <i className={`fa ${ isPassShown ? "fa-eye-slash" : "fa-eye" } password-iconre`}
                                                    onClick = {this.toggleShowPass} />
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