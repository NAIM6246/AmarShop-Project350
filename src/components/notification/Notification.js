import React, { Component,Fragment } from 'react';
import {Container,Row,Col,Modal,Card,Button} from 'react-bootstrap';
import AppUrl from '../../restAPI/AppUrl';
import axios from 'axios';
import { Link } from 'react-router-dom';
class Notification extends Component {

    constructor(props) {
        super(props);
        this.state={
            show:false,
            Data:[],
            message:"",
            title:"",
            date:""
        }
        this.handleShow=this.handleShow.bind(this);
        this.handleClose=this.handleClose.bind(this);
    }
    handleClose=()=>{
        this.setState({show:false})
    }
    handleShow=(event)=>{
        this.setState({show:true})
        let message=event.target.getAttribute('modeldescription');
        let title=event.target.getAttribute('modelTitle');
        let date=event.target.getAttribute('modelDate');
        alert(title)
        this.setState({message:message,title:title,date:date})
    }
    componentDidMount() {
        axios.get(AppUrl.getNotificationDetails).then(response=>{
            if(response.status==200){
                let Data=(response.data);
                this.setState({Data:Data});
            }
        }).catch(error=>{
           
       });
    }
    
    
    
    render() {

        const myList=this.state.Data;
    
        
        const view=myList.map((myList,i)=>{
            return    <Col key={i.toString()}className="p-1" md={4} lg={4} sm={6} xs={12}>
                          <Card  modelDate={myList.date} modelTitle={myList.title} modeldescription={myList.message}onClick={this.handleShow} className="notification-card">
                            <Card.Body>
                                 <h6 id="demoTitle">{myList.title}</h6>
                                <p className="py-1  px-0 text-primary m-0"><i className="fa  fa-bell"></i>{myList.date}</p>
                            </Card.Body>
                         </Card>
                    </Col>
        });
        return (
            <Fragment>
                        <Container className="mt-5">
                        <Row>
                            {view}
                        </Row>
                    </Container>

                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <h6><i className="fa  fa-bell"></i>   Date: {this.state.date}</h6>
                        </Modal.Header>
                        <Modal.Body>
                        <h3>{this.state.title}</h3>
                        <p> {this.state.message}</p>
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