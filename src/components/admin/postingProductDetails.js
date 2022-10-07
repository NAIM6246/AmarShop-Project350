import React, { Component,Fragment } from 'react';
import { Container,Row,Col,Card,Button,Form } from 'react-bootstrap';
import AppUrl from '../../restAPI/AppUrl';
import axios from 'axios';
import {toast} from 'react-toastify';
class postingProductDetails extends Component {

constructor(props){
    super(props);
    this.state={
        category:"",
        subCategory:"",
        name:"",
        productDetails:"",
        productPrice:"",
        productSize:"",
        productAmount:"",
        productType:"",
        productFile:"",
        redirect:false
    }
}
categoryOnChange=(event)=>{
    
     let clientName=event.target.value;
     this.setState({category:clientName})
}
subCategoryOnChange=(event)=>{
    let clientName=event.target.value;
    this.setState({subCategory:clientName})
}
nameOnChange=(event)=>{
    let clientName=event.target.value;
    this.setState({name:clientName})

}

productDetailsOnChange=(event)=>{
    let clientMobile=event.target.value;
    this.setState({productDetails:clientMobile})
}
priceOnChange=(event)=>{
    let clientEmail=event.target.value;
    this.setState({productPrice:clientEmail})

}
sizeOnChange=(event)=>{
    let clientEmail=event.target.value;
    this.setState({productSize:clientEmail})
}
amountOnChange=(event)=>{
    let clientEmail=event.target.value;
    this.setState({productAmount:clientEmail})
}

typeOnChange=(event)=>{
    let clientPassword=event.target.value;
    this.setState({productType:clientPassword})
}

fileOnChange=(event)=>{
    this.setState({productFile:event.target.files[0]})
}
formOnSubmit=(event)=>{
   var category=this.state.category;
   var subCategory=this.state.subCategory;
   var name =this.state.name;
   var productDetails=this.state.productDetails;
   var productPrice=this.state.productPrice;
   var productAmount=this.state.productAmount;
   var productSize=this.state.productSize;
   var productType=this.state.productType;
   var productFile=this.state.productFile;
   let contactForm=document.getElementById("myForm");
   
   const data=JSON.stringify(
       {
           "productCat":category,
           "productSubCat":subCategory,
           "productName":name,
           "details":productDetails,
           "price":parseInt( productPrice,10),
           "ammount":parseInt(productAmount,10),
           "type":productSize,
           "size":productType
       }
   )
   console.log(data)

       axios.post(AppUrl.productCreate,data).then(function(response){
           if(response.status==200){
            sessionStorage.setItem('userName',1)
            
            toast.success("Success")
            window.location.replace('/')

               contactForm.reset();
           }
           else{
              toast.error("Oops!Please Check Your Internet Connection")
           }
       }).catch(function(error){

       })
     event.preventDefault();
}
    render() {
        return (
            <Fragment>
                 <Container className="p-5">
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Add Product</Card.Title>
                                        <Form  id="myForm" onSubmit={this.formOnSubmit}>
                                        <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Product Category</Form.Label>
                                                <Form.Control onChange={this.categoryOnChange} type="text" placeholder="Product Category"/>
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Product Subcategory</Form.Label>
                                                <Form.Control onChange={this.subCategoryOnChange} type="text" placeholder="Product Subcategory"/>
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Product Name</Form.Label>
                                                <Form.Control onChange={this.nameOnChange} type="text" placeholder="Product Name" />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Product Details</Form.Label>
                                                <Form.Control onChange={this.productDetailsOnChange} type="text" placeholder="Product Details" />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Product Price</Form.Label>
                                                <Form.Control onChange={this.priceOnChange} type="text" placeholder="Product Price" />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Product Size</Form.Label>
                                                <Form.Control onChange={this.sizeOnChange} type="text" placeholder="Product Size" />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Product Amount</Form.Label>
                                                <Form.Control onChange={this.amountOnChange} type="text" placeholder="Product Amount" />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Product Type</Form.Label>
                                                <Form.Control onChange={this.typeOnChange} type="text" placeholder="Product Type" />
                                            </Form.Group>
                                            <input type="file" className="form-control" name="upload_file" onChange={this.fileOnChange} />


                                            <Button type="submit" variant="primary">Submit</Button>
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

export default postingProductDetails;