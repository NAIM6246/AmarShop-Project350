import React, { Component } from 'react';
import Slider from 'react-slick';
class SliderHome extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay:true,
            autoplaySpeed:1000,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return (
            <div>
                <Slider {...settings}>
          <div>
            <img  className="w-100 slider-img" src="images/slider1.jpg"></img>
          </div>
          <div>
            <img className="w-100 slider-img" src="images/slider2.jpg"></img>
          </div>
          <div>
              <img className="w-100 slider-img" src="images/slider3.jpg"></img>
          </div>
        </Slider>
            </div>
        );
    }
}

export default SliderHome;