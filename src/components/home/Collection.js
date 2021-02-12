import React, { Component,Fragment} from 'react';
import {Row,Container,Col,Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppUrl from '../../restAPI/AppUrl';
import axios from 'axios';
class Collection extends Component {

    constructor(props){
        super(props)
        this.state={
             Data:[]
        }
    }
    componentDidMount() {
        /*fetch*/
        axios.get(AppUrl.getProductListByRemark("Collection")).then(response=>{
            this.setState({Data:response.data})
        }).catch(error=>{

        })
    }
    render() {

        const myList=this.state.Data;

        const view=myList.map((myList,i)=>{
            return  <Col key={i.toString()}className="p-0"key={1} xl={3} lg={3} md={6} sm={6} xs={12}>
            <Link to={"/productDetails/"+myList.productCode}>
            <Card className="collection-image-box card">
                <img src="images/product2.jpg"></img>
                <Card.Body>
                    <p className="product-name-on-card text-center">{myList.title}</p>
                    <p className="product-price-on-card text-center">Price:{myList.price}TK</p>
                </Card.Body>
            </Card>
            </Link>
        </Col>
        })
        return (
            <Fragment>
            <Container fluid={true} className="card mt-3" >
                <h5 className="section-title text-center pt-3">COLLECTIONS</h5>
                <p className="section-sub-title text-center">Some Of Our Exclusive Collection, You May Like</p>
                <Row>
                {view}

                </Row>
            </Container>
        </Fragment>
        );
    }
}

export default Collection;