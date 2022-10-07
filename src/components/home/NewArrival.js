import React, { Component, Fragment } from 'react';
import {Container,Card} from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import AppUrl from '../../restAPI/AppUrl';
import axios from 'axios';
class NewArrival extends Component {
    
  constructor(props){
     super(props);
     this.state={
      Data:[]
     }
    this.next=this.next.bind(this);
    this.previous=this.previous.bind(this);

  }
  next(){
      this.slider.slickNext();

  }
  previous(){
    this.slider.slickPrev();
  }
   
  componentDidMount() {

    /*fetch new arrival as like as feature product and collection product*/
    axios.get(AppUrl.getProductListByRemark("New")).then(response=>{
        this.setState({Data:response.data})
    }).catch(error=>{

    })
}
   
    render() {

      const myList=this.state.Data;

      const view=myList.map((myList,i)=>{
          return     <div key={i.toString()}>
          <Link to={"/productDetails/"+myList.id}>
              <Card className="newArrival-image-box card">
                      <img src="images/product1.jpg"></img>
                      <Card.Body>
                          <p className="product-name-on-card text-center">{myList.productName}</p>
                          <p className="product-price-on-card text-center">Price:{myList.price}TK</p>
                      </Card.Body>
                  </Card>
                  </Link>
          </div>
      })

        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            autoplay:true,
            autoplaySpeed:1000,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
        return (
            <Container fluid={true} style={{padding: "10px"}} >
                 <h5 className="section-title text-center px-0 mx-0">NEW ARRIVAL
                 <a className="btn btn-sm ml-2 site-btn" onClick={this.previous}>
                   <i className="fa fa-angle-left"></i>
                 </a>
                 <a className="btn btn-sm ml-2 site-btn"  onClick={this.next}>
                   <i className="fa fa-angle-right"></i>
                 </a>
                 </h5>
                 <p className="section-sub-title text-center">Some Of Our Exclusive Collection, You May Like</p>
                 <Slider ref={c=>(this.slider=c)} {...settings}>
                    {view}
                     
                </Slider> 
                </Container>
            
        );
    }
}

export default NewArrival;