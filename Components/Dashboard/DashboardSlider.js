import React, { Component } from "react";
import Slider from "react-slick";
import Card from "./Card";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}

            onClick={onClick}
        >
            <i style={{ fontSize: '37px', color: '#c0c0c0' }} className="fa fa-arrow-right" aria-hidden="true"></i>
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
            <i style={{ fontSize: '37px', color: '#c0c0c0' }} className="fa fa-arrow-left" aria-hidden="true"></i>
        </div>
    );
}

export default class DashboardSlider extends Component {
    render() {
        const settings = {
            className: "slider variable-width",
            dots: false,
            focusOnSelect: false,
            speed: 1000,
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
                        <Card />
                    </div>
                    <div style={{ width: 800 }}>
                        <Card />
                    </div>
                    <div style={{ width: 800 }}>
                        <Card />
                    </div>
                    <div style={{ width: 800 }}>
                        <Card />
                    </div>
                    <div style={{ width: 800 }}>
                        <Card />
                    </div>
                    <div style={{ width: 800 }}>
                        <Card />
                    </div>
                </Slider>
            </div>
        );
    }
}

