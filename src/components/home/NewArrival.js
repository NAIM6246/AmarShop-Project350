import React, { Component, Fragment } from 'react';
import {Container,Card} from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class NewArrival extends Component {
    
  constructor(props){
     super(props);
    this.next=this.next.bind(this);
    this.previous=this.previous.bind(this);

  }
  next(){
      this.slider.slickNext();

  }
  previous(){
    this.slider.slickPrev();
  }
 

   
    render() {

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
                     <div>
                         <Card className="newArrival-image-box card">
                                 <img src="images/product1.jpg"></img>
                                 <Card.Body>
                                     <p className="product-name-on-card text-center">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</p>
                                     <p className="product-price-on-card text-center">Price:3000TK</p>
                                 </Card.Body>
                             </Card>
                     </div>
                     <div>
                         <Card className="newArrival-image-box card">
                                 <img src="images/product1.jpg"></img>
                                 <Card.Body>
                                     <p className="product-name-on-card text-center">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</p>
                                     <p className="product-price-on-card text-center">Price:3000TK</p>
                                 </Card.Body>
                             </Card>
                     </div>
                     <div>
                         <Card className="newArrival-image-box card">
                                 <img src="images/product1.jpg"></img>
                                 <Card.Body>
                                     <p className="product-name-on-card text-center">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</p>
                                     <p className="product-price-on-card text-center">Price:3000TK</p>
                                 </Card.Body>
                             </Card>
                     </div>
                     <div>
                         <Card className="newArrival-image-box card">
                                 <img src="images/product1.jpg"></img>
                                 <Card.Body>
                                     <p className="product-name-on-card text-center">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</p>
                                     <p className="product-price-on-card text-center">Price:3000TK</p>
                                 </Card.Body>
                             </Card>
                     </div>
                     <div>
                         <Card className="newArrival-image-box card">
                                 <img src="images/product1.jpg"></img>
                                 <Card.Body>
                                     <p className="product-name-on-card text-center">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</p>
                                     <p className="product-price-on-card text-center">Price:3000TK</p>
                                 </Card.Body>
                             </Card>
                     </div>
                     
                </Slider> 
                </Container>
            
        );
    }
}

export default NewArrival;