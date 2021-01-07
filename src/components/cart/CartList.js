import React, { Component,Fragment } from 'react';
import {Button, Card,ListGroup, Col, Container, Row,Form} from "react-bootstrap";
import {Link} from "react-router-dom";

class CartList extends Component {
    render() {
        return (
            <Fragment>
                <br/>
                <Container className="TopSection pb-5 text-center shadow-sm bg-white">
                    <Row className="p-2 bg-light text-center">
                        <Col className="p-1" key={1} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <h5 className=" "> PRODUCT CART LIST</h5>
                            <h6 className="m-0  p-0">Total Price 3000BDT | Total Item 04</h6>
                            <Link to="/order" className="btn m-1  site-btn"> <i className="fa fa-shopping-cart"></i> Checkout Now</Link>
                        </Col>
                    </Row>
                    <Row className="p-2">


                        <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={4} xs={6} >
                            <Card className="cart-card w-100 image-box ">
                                <img src="images/product1.jpg"/>
                                <Card.Body>
                                    <h5 className="product-name-on-card m-0 p-0">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                                    <p className="product-price-on-card m-0 p-0">Total Price: 3000TK</p>
                                </Card.Body>
                                <div className="input-group m-0 p-0 w-100">
                                    <Button className="btn text-danger w-50 btn-light"><i className="fa fa-trash-alt"></i> </Button>
                                    <input placeholder="5" className="form-control w-50 text-center" type="number" />
                                </div>
                            </Card>
                        </Col>
                        <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={4} xs={6} >
                            <Card className="cart-card w-100 image-box ">
                                <img src="images/product1.jpg"/>
                                <Card.Body>
                                    <h5 className="product-name-on-card m-0 p-0">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                                    <p className="product-price-on-card m-0 p-0">Total Price: 3000TK</p>
                                </Card.Body>
                                <div className="input-group m-0 p-0 w-100">
                                    <Button className="btn text-danger w-50 btn-light"><i className="fa fa-trash-alt"></i> </Button>
                                    <input placeholder="5" className="form-control w-50 text-center" type="number" />
                                </div>
                            </Card>
                        </Col>
                        <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={4} xs={6} >
                            <Card className="cart-card w-100 image-box ">
                                <img src="images/product1.jpg"/>
                                <Card.Body>
                                    <h5 className="product-name-on-card m-0 p-0">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                                    <p className="product-price-on-card m-0 p-0">Total Price: 3000TK</p>
                                </Card.Body>
                                <div className="input-group m-0 p-0 w-100">
                                    <Button className="btn text-danger w-50 btn-light"><i className="fa fa-trash-alt"></i> </Button>
                                    <input placeholder="5" className="form-control w-50 text-center" type="number" />
                                </div>
                            </Card>
                        </Col>
                        <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={4} xs={6} >
                            <Card className="cart-card w-100 image-box ">
                                <img src="images/product1.jpg"/>
                                <Card.Body>
                                    <h5 className="product-name-on-card m-0 p-0">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                                    <p className="product-price-on-card m-0 p-0">Total Price: 3000TK</p>
                                </Card.Body>
                                <div className="input-group m-0 p-0 w-100">
                                    <Button className="btn text-danger w-50 btn-light"><i className="fa fa-trash-alt"></i> </Button>
                                    <input placeholder="5" className="form-control w-50 text-center" type="number" />
                                </div>
                            </Card>
                        </Col>


                        <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={4} xs={6} >
                            <Card className="cart-card w-100 image-box ">
                                <img src="images/product1.jpg"/>
                                <Card.Body>
                                    <h5 className="product-name-on-card m-0 p-0">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                                    <p className="product-price-on-card m-0 p-0">Total Price: 3000TK</p>
                                </Card.Body>
                                <div className="input-group m-0 p-0 w-100">
                                    <Button className="btn text-danger w-50 btn-light"><i className="fa fa-trash-alt"></i> </Button>
                                    <input placeholder="5" className="form-control w-50 text-center" type="number" />
                                </div>
                            </Card>
                        </Col>


                        <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={4} xs={6} >
                            <Card className="cart-card w-100 image-box ">
                                <img src="images/product1.jpg"/>
                                <Card.Body>
                                    <h5 className="product-name-on-card m-0 p-0">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                                    <p className="product-price-on-card m-0 p-0">Total Price: 3000TK</p>
                                </Card.Body>
                                <div className="input-group m-0 p-0 w-100">
                                    <Button className="btn text-danger w-50 btn-light"><i className="fa fa-trash-alt"></i> </Button>
                                    <input placeholder="5" className="form-control w-50 text-center" type="number" />
                                </div>
                            </Card>
                        </Col>


                    </Row>

                </Container>

            </Fragment>
        );
    }
}

export default CartList;