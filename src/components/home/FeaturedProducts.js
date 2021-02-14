import React, { Component,Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
    import AppUrl from '../../restAPI/AppUrl';
import axios from 'axios';
class FeaturedProducts extends Component {

    constructor(props){
        super(props)
        this.state={
             Data:[],
             myTitle:""
        }
    }
   
    componentDidMount() {

        /*fetching data, same type data will be fetch for new arrival and collection component */
        axios.get(AppUrl.getProductListByRemark("Feature")).then(response=>{
            this.setState({Data:response.data})


        }).catch(error=>{

        })
    }
     

    render() {
        const myList=this.state.Data;

        const view=myList.map((myList,i)=>{
            return   <Col key={i.toString()}className="p-1"key={1} xl={2} lg={2} md={3} sm={4} xs={6}>
            <Link to={"/productDetails/"+myList.productCode}>
                <Card className="image-box card">
                    <img src="images/product1.jpg"></img>
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
                <Container fluid={true} >
                    <h5 className="section-title text-center">FEATURED PRODUCTS</h5>
                    <p className="section-sub-title text-center">Some Of Our Exclusive Collection, You May Like</p>
                    <Row>
                        
                    {view}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default FeaturedProducts;