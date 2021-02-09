import React, { Component,Fragment} from 'react';
import {Row,Container,Col,Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AppUrl from '../../restAPI/AppUrl';
import { ToastContainer,toast } from 'react-toastify';
class Categories extends Component {

    constructor(props){
        super(props);
        this.state={
            categoryData:[]
        }
    }
    
    componentDidMount() {
       
            axios.get(AppUrl.getCategoryDetails).then(response=>{
                if(response.status==200){
                   
                    let Data=(response.data);
                    this.setState({categoryData:Data});
                }
            }).catch(error=>{
                toast.error("something went wrong!Try again!")
           });
    }
    render() {

        const MyList=this.state.categoryData;
    
            const view=MyList.map((MyList,i)=>{
                return <Col  key={i.toString()}className="p-0"   key={1} xl={2} lg={2} md={2} sm={3} xs={4}>
                <Link to="/productDetails">   
                    <Card className="categories-image-box categories-card">
                        <img src="images/category1.jpg"></img>
                        <Card.Body>
                           <p className="product-name-on-card text-center">{MyList.$categoryLevel1Name}</p>
                        </Card.Body>
                    </Card>
                </Link> 
                </Col>
    
            })
        return (
            <Fragment>
            <Container fluid={true} >
                <br></br>
                <br></br>
                <br></br>
                <h5 className="section-title text-center pt-7">CATEGORIES</h5>
                <p className="section-sub-title text-center">Some Of Our Exclusive Collection, You May Like</p>
                <Row>
                   {view}
                </Row>
            </Container>
        </Fragment>
        );
    }
}

export default Categories;