import React, { Component,Fragment } from 'react';
import { Container,Row,Col,Card,Button,Form } from 'react-bootstrap';
import axios from 'axios';
class Address extends Component {
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
                                         <Form.Label>District</Form.Label>
                                         <Form.Control onChange={this.emailOnChange} type="text" placeholder="Your District" />
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

export default Address;