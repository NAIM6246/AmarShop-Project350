import React, { Component,Fragment} from 'react';
import {Row,Container,Col,Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
class Collection extends Component {
    render() {
        return (
            <Fragment>
            <Container fluid={true} className="card mt-3" >
                <h5 className="section-title text-center pt-3">COLLECTIONS</h5>
                <p className="section-sub-title text-center">Some Of Our Exclusive Collection, You May Like</p>
                <Row>
                    <Col className="p-0"key={1} xl={3} lg={3} md={6} sm={6} xs={12}>
                        <Link to="/productDetails">
                        <Card className="collection-image-box card">
                            <img src="images/product2.jpg"></img>
                            <Card.Body>
                                <p className="product-name-on-card text-center">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</p>
                                <p className="product-price-on-card text-center">Price:3000TK</p>
                            </Card.Body>
                        </Card>
                        </Link>
                    </Col>
                    <Col className="p-0"key={1} xl={3} lg={3} md={6} sm={6} xs={12}>
                    <Link to="/productDetails">
                        <Card className="collection-image-box card">
                            <img src="images/product2.jpg"></img>
                            <Card.Body>
                                <p className="product-name-on-card text-center">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</p>
                                <p className="product-price-on-card text-center">Price:3000TK</p>
                            </Card.Body>
                        </Card>
                        </Link>
                    </Col>
                    <Col className="p-0"key={1} xl={3} lg={3} md={6} sm={6} xs={12}>
                    <Link to="/productDetails">
                        <Card className="collection-image-box card">
                            <img src="images/product2.jpg"></img>
                            <Card.Body>
                                <p className="product-name-on-card text-center">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</p>
                                <p className="product-price-on-card text-center">Price:3000TK</p>
                            </Card.Body>
                        </Card>
                        </Link>
                    </Col>
                    <Col className="p-0"key={1} xl={3} lg={3} md={6} sm={6} xs={12}>
                    <Link to="/productDetails">
                        <Card className="collection-image-box card">
                            <img src="images/product2.jpg"></img>
                            <Card.Body>
                                <p className="product-name-on-card text-center">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</p>
                                <p className="product-price-on-card text-center">Price:3000TK</p>
                            </Card.Body>
                        </Card>
                        </Link>
                    </Col>

                    <Col className="p-0"key={1} xl={3} lg={3} md={6} sm={6} xs={12}>
                    <Link to="/productDetails">
                        <Card className="collection-image-box card">
                            <img src="images/product2.jpg"></img>
                            <Card.Body>
                                <p className="product-name-on-card text-center">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</p>
                                <p className="product-price-on-card text-center">Price:3000TK</p>
                            </Card.Body>
                        </Card>
                        </Link>
                    </Col>
                    <Col className="p-0"key={1} xl={3} lg={3} md={6} sm={6} xs={12}>
                    <Link to="/productDetails">
                        <Card className="collection-image-box card">
                            <img src="images/product2.jpg"></img>
                            <Card.Body>
                                <p className="product-name-on-card text-center">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</p>
                                <p className="product-price-on-card text-center">Price:3000TK</p>
                            </Card.Body>
                        </Card>
                        </Link>
                    </Col>
                    <Col className="p-0"key={1} xl={3} lg={3} md={6} sm={6} xs={12}>
                    <Link to="/productDetails">
                        <Card className="collection-image-box card">
                            <img src="images/product2.jpg"></img>
                            <Card.Body>
                                <p className="product-name-on-card text-center">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</p>
                                <p className="product-price-on-card text-center">Price:3000TK</p>
                            </Card.Body>
                        </Card>
                        </Link>
                    </Col>
                    <Col className="p-0"key={1} xl={3} lg={3} md={6} sm={6} xs={12}>
                    <Link to="/productDetails">
                        <Card className="collection-image-box card">
                            <img src="images/product2.jpg"></img>
                            <Card.Body>
                                <p className="product-name-on-card text-center">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</p>
                                <p className="product-price-on-card text-center">Price:3000TK</p>
                            </Card.Body>
                        </Card>
                        </Link>
                    </Col>

                </Row>
            </Container>
        </Fragment>
        );
    }
}

export default Collection;