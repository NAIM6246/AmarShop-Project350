import React, { Component,Fragment } from 'react';
import { Container,Row,Col,Card,Button,Form } from 'react-bootstrap';
import { Link, Redirect} from 'react-router-dom';
import AppUrl from '../../restAPI/AppUrl';
import Validation from '../../validation/Validation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
class UserOnboard extends Component {
    
        /**name,password ei naam gula diya value input zaabe r url setup dibi eirkom "localhost:8000/api/getLoginDetails" zodi url change korte chaas taile restAPI folder e AppRrl.js e giya change korish */

    constructor(props) {
        super(props);
        this.state={
            mobile:"",
            password:"",
            redirectStatus:false
        }
    }
    /*eikhane name ke dhora hoise */
    nameOnChange=(event)=>{
        let clientMobile=event.target.value;
        this.setState({mobile:clientMobile})
   }
   /*eikhane password ke dhora hoise */
   passwordOnChange=(event)=>{
    let clientPassword=event.target.value;
    this.setState({password:clientPassword})
   }
   /*login button e click korle ei function kaaj korbe */
   formOnSubmit=(event)=>{
    var mobile =this.state.mobile;
    var password=this.state.password;
    let contactForm=document.getElementById("myForm");
    
    if(mobile.length==0){
        toast.error("Mobile number required");
    }
    else if(password.length<8){
        toast.error("Minimum 8 digit password is required!");
    }
    else{
        toast.success(mobile) /*zodi data input hoy taile ei toast show korbe */
        toast.success(password)
        /* naam r password ke ekta form data r maddome pathano hoise, eikhane Url hoilo localhost:3000/getLoginDetails */
        let myFormData=new FormData();
        myFormData.append("mobile",mobile)
        myFormData.append("password",password)
        //converting form data to json
        let object = {};
        myFormData.forEach(function(value,key){
            object[key] = value;
        });
        const json = JSON.stringify(object)

        //parsing json object
        axios.post(AppUrl.getLoginDetails,json).then(function(response){
            if(response.status==200){
                sessionStorage.setItem('userName',1)
                toast.success("Success")
                window.location.replace('/')
                contactForm.reset()
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
                                        <Form   id="myForm" method="post" onSubmit={this.formOnSubmit} >
                                        <Form.Group controlId="formBasicEmail">
                                                <Form.Label>User Name</Form.Label>
                                                <Form.Control onChange={this.nameOnChange} type="text" placeholder="Your Name" />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control onChange={this.passwordOnChange} type={(isPassShown) ? "text" : "password" } placeholder="Enter Your Password" />
                                                <i className={`fa ${ isPassShown ? "fa-eye-slash" : "fa-eye" } password-icon`}
                                                    onClick = {this.toggleShowPass} />
                                            </Form.Group>
                                            <Button type="submit"variant="primary">LogIn</Button>
                                           <Link to="/registration"><Button variant="primary" className="ml-5">SignUp</Button></Link>
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

export default UserOnboard;