import React, { Component,Fragment } from 'react';
import {Container,Row,Col,Modal,Card,Button} from 'react-bootstrap';
class Notification extends Component {

    constructor(props) {
        super(props);
        this.state={
            show:false
        }
        this.handleShow=this.handleShow.bind(this);
        this.handleClose=this.handleClose.bind(this);
    }
    handleClose=()=>{
        this.setState({show:false})
    }
    handleShow=()=>{
        this.setState({show:true})
    }
    
    
    render() {
        return (
            <Fragment>
                        <Container className="TopSection mt-5">
                        <Row>
                            <Col className=" p-1 " md={6} lg={6} sm={12} xs={12}>
                                <Card onClick={this.handleShow} className="notification-card">
                                    <Card.Body>
                                        <h6> Lorem Ipsum is simply dummy text of the printing</h6>
                                        <p className="py-1  px-0 text-primary m-0"><i className="fa  fa-bell"></i>   Date: 22/12/2010 | Status: Unread</p>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col className=" p-1 " md={6} lg={6} sm={12} xs={12}>
                                <Card onClick={this.handleShow} className="notification-card">
                                    <Card.Body>
                                        <h6> Lorem Ipsum is simply dummy text of the printing</h6>
                                        <p className="py-1   px-0 text-primary m-0"><i className="fa  fa-bell"></i>   Date: 22/12/2010 | Status: Unread</p>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
                                <Card onClick={this.handleShow} className="notification-card">
                                    <Card.Body>
                                        <h6> Lorem Ipsum is simply dummy text of the printing</h6>
                                        <p className="py-1  px-0 text-success m-0"><i className="fa  fa-bell"></i>   Date: 22/12/2010 | Status: Read</p>
                                    </Card.Body>
                                </Card>

                            </Col>

                            <Col className="p-1" md={6} lg={6} sm={12} xs={12}>

                                <Card  onClick={this.handleShow} className="notification-card">
                                    <Card.Body>
                                        <h5> Lorem Ipsum is simply dummy text of the printing</h5>
                                        <p className="py-1  px-0 text-success m-0"><i className="fa fa-bell"></i>   Date: 22/12/2010 | Status: Read</p>
                                    </Card.Body>
                                </Card>

                            </Col>

                            <Col className="p-1" md={6} lg={6} sm={12} xs={12}>

                                <Card  onClick={this.handleShow} className="notification-card">
                                    <Card.Body>
                                        <h6> Lorem Ipsum is simply dummy text of the printing</h6>
                                        <p className="py-1  px-0 text-success m-0"><i className="fa  fa-bell"></i>   Date: 22/12/2010 | Status: Read</p>
                                    </Card.Body>
                                </Card>

                            </Col>

                            <Col className="p-1" md={6} lg={6} sm={12} xs={12}>

                                <Card onClick={this.handleShow} className="notification-card">
                                    <Card.Body>
                                        <h6> Lorem Ipsum is simply dummy text of the printing</h6>
                                        <p className="py-1 px-0 text-success m-0"><i className="fa  fa-bell"></i>   Date: 22/12/2010 | Status: Read</p>
                                    </Card.Body>
                                </Card>

                            </Col>

                        </Row>
                    </Container>

                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <h6><i className="fa  fa-bell"></i>   Date: 22/12/2010 </h6>
                        </Modal.Header>
                        <Modal.Body>
                            <h6> Lorem Ipsum is simply dummy text of the printing</h6>
                            <p> Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing</p>
                            <p> Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
            </Fragment>
        );
    }
}

export default Notification;