import React, { Component } from "react";
import Slider from "react-slick";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={ className}
      
      onClick={onClick}
    >
      <i style={{fontSize: '37px', color: '#c0c0c0'}} className="fa fa-arrow-right" aria-hidden="true"></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      
      onClick={onClick}
    >
      <i style={{fontSize: '37px', color: '#c0c0c0'}} className="fa fa-arrow-left" aria-hidden="true"></i>
    </div>
  );
}

export default class NewCrosal extends Component {
    render() {
      const settings = {
        className: "slider variable-width",
        dots: false,
        focusOnSelect: false,
        speed:1000,
        infinite: true,
        // centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
      return (
        <div className="container">
          <Slider {...settings}>
            <div style={{ width: 800 }}>
                <img className="img-fluid"  src={'/Images/Slider/Slider.png'} />
            </div>
            <div style={{ width: 800 }}>
                <img className="img-fluid"  src={'/Images/Slider/Slider_1.png'} />
            </div>
            <div style={{ width: 800 }}>
                <img className="img-fluid"  src={'/Images/Slider/Slider_2.png'} />
            </div>
            <div style={{ width: 800 }}>
                <img className="img-fluid"  src={'/Images/Slider/Slider_3.png'} />
            </div>
            <div style={{ width: 800 }}>
            <img className="img-fluid"  src={'/Images/Slider/Slider_4.png'} />
            </div>
            <div style={{ width: 800 }}>
            <img className="img-fluid"  src={'/Images/Slider/Slider_5.png'} />
            </div>
          </Slider>
        </div>
      );
    }
  }

