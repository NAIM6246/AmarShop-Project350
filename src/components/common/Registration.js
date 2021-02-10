import React, { Component,Fragment } from 'react';
import { Container,Row,Col,Card,Button,Form } from 'react-bootstrap';

class Registration extends Component {
    render() {
        return (
            <Fragment>
                 <Container className="p-5">
                    <Row>
                        <Col lg={4} md={4} sm={8} xs={12}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                        <Form>
                                        <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control type="text" placeholder="Your Name" />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Mobile Number</Form.Label>
                                                <Form.Control type="text" placeholder="Your mobile number" />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="text" placeholder="Your Email" />
                                            </Form.Group>
                                            
                                        </Form>
                                    <Button variant="primary">Next</Button>
                                    <Button variant="primary" className="ml-5">SignUp</Button>

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