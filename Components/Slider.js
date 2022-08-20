import React, { Component } from "react";
import Slider from "react-slick";

export default function AutoPlay({ speed }) {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slideToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    speed: speed,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,

  };
  return (
    <div className="container" style={{filter: 'grayscale(1)'}}>
      <Slider {...settings}>
        <div >
          <img src={'/Images/Clients Logo/Client logo B2-01.png'} className={'img-fluid'} width={130} height={130} />
        </div>
        <div>
          <img src={'/Images/Clients Logo/Client logo B2-02.png'} className={'img-fluid'} width={130} height={130} />
        </div>
        <div>
          <img src={'/Images/Clients Logo/Client logo B2-03.png'} className={'img-fluid'} width={130} height={130} />
        </div>
        <div>
          <img src={'/Images/Clients Logo/Client logo B2-04.png'} className={'img-fluid'} width={130} height={130} />
        </div>
        <div>
          <img src={'/Images/Clients Logo/Client logo B2-05.png'} className={'img-fluid'} width={130} height={130} />
        </div>
        <div>
          <img src={'/Images/Clients Logo/Client logo B2-06.png'} className={'img-fluid'} width={130} height={130} />
        </div>
        <div>
          <img src={'/Images/Clients Logo/Client logo B2-07.png'} className={'img-fluid'} width={130} height={130} />
        </div>
        <div>
          <img src={'/Images/Clients Logo/Client logo B2-08.png'} className={'img-fluid'} width={130} height={130} />
        </div>
        <div>
          <img src={'/Images/Clients Logo/Client logo B2-09.png'} className={'img-fluid'} width={130} height={130} />
        </div>
        <div>
          <img src={'/Images/Clients Logo/Client logo B2-10.png'} className={'img-fluid'} width={130} height={130} />
        </div>

      </Slider>
    </div>
  );

}