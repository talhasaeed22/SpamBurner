import React, { Component } from "react";
import Slider from "react-slick";
import slider1 from '../../public/Images/Slider/Slider.png'
import slider2 from '../../public/Images/Slider/Slider_1.png'
import slider3 from '../../public/Images/Slider/Slider_2.png'
import slider4 from '../../public/Images/Slider/Slider_3.png'
import slider5 from '../../public/Images/Slider/Slider_4.png'
import slider6 from '../../public/Images/Slider/Slider_5.png'
import Image from "next/future/image";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default class NewCrosal extends Component {
    render() {
      const settings = {
        className: "slider variable-width",
        dots: true,
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
                <Image className="img-fluid"  src={slider1} />
            </div>
            <div style={{ width: 800 }}>
                <Image className="img-fluid"  src={slider2} />
            </div>
            <div style={{ width: 800 }}>
                <Image className="img-fluid"  src={slider3} />
            </div>
            <div style={{ width: 800 }}>
            <Image className="img-fluid"  src={slider4} />
            </div>
            <div style={{ width: 800 }}>
            <Image className="img-fluid"  src={slider5} />
            </div>
            <div style={{ width: 800 }}>
            <Image className="img-fluid"  src={slider6} />
            </div>
          </Slider>
        </div>
      );
    }
  }

