import React, { Component } from "react";
import Slider from "react-slick";
import slider1 from '../../public/Images/Slider/Slider.png'
import slider2 from '../../public/Images/Slider/Slider_1.png'
import slider3 from '../../public/Images/Slider/Slider_2.png'
import slider4 from '../../public/Images/Slider/Slider_3.png'
import slider5 from '../../public/Images/Slider/Slider_4.png'
import slider6 from '../../public/Images/Slider/Slider_5.png'
import Image from "next/future/image";
import styles from './Carousel.module.css'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div onClick={onClick} className={styles.rightArrow}>
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </div>

    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={styles.leftArrow}
            onClick={onClick}
        >
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
        </div>
    );
}

export default class Carousel extends Component {
    render() {
        const settings = {
            
            dots: false,
            infinite: true,
            lazyLoad: true,
            cssEase: 'linear',
            speed: 1000,
            slidesToShow: 2,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            
        };
        return (
            <div className="container">
                <Slider {...settings}>
                    <div style={{width:'800px', height:'532px'}}>
                        <Image className="img-fluid"  src={slider1} />
                    </div>
                    <div style={{width:'800px', height:'532px'}}>
                        <Image className="img-fluid" src={slider2} />
                    </div>
                    <div>
                        <Image className="img-fluid" src={slider3} />
                    </div>
                    <div>
                        <Image className="img-fluid" src={slider4} />
                    </div>
                    <div>
                        <Image className="img-fluid" src={slider5} />
                    </div>
                    <div>
                        <Image className="img-fluid" src={slider6} />
                    </div>
                </Slider>
            </div>
        );
    }
}