import React, { Component } from "react";
import Slider from "react-slick";
import Image from 'next/future/image'
import client1 from '../public/Images/Clients Logo/Client logo B2-01.png'
import client2 from '../public/Images/Clients Logo/Client logo B2-02.png'
import client3 from '../public/Images/Clients Logo/Client logo B2-03.png'
import client4 from '../public/Images/Clients Logo/Client logo B2-04.png'
import client5 from '../public/Images/Clients Logo/Client logo B2-05.png'
import client6 from '../public/Images/Clients Logo/Client logo B2-06.png'
import client7 from '../public/Images/Clients Logo/Client logo B2-07.png'
import client8 from '../public/Images/Clients Logo/Client logo B2-08.png'
import client9 from '../public/Images/Clients Logo/Client logo B2-09.png'
import client10 from '../public/Images/Clients Logo/Client logo B2-10.png'
export default function AutoPlay({speed}){ 
    const settings = {
      infinite: true,
      slidesToShow: 6,
      slideToScroll:1,
      swipeToSlide: true,      
      autoplay: true,
      speed: speed,
      autoplaySpeed: 0,
      cssEase: "linear",
      pauseOnHover: true,
      
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div>
            <Image src={client1} className={'img-fluid'} />
          </div>
          <div>
          <Image src={client2} className={'img-fluid'} />
          </div>
          <div>
          <Image src={client3} className={'img-fluid'} />
          </div>
          <div>
          <Image src={client4} className={'img-fluid'} />
          </div>
          <div>
          <Image src={client5} className={'img-fluid'} />
          </div>
          <div>
          <Image src={client6} className={'img-fluid'} />
          </div>
          <div>
          <Image src={client7} className={'img-fluid'} />
          </div>
          <div>
          <Image src={client8} className={'img-fluid'} />
          </div>
          <div>
          <Image src={client9} className={'img-fluid'} />
          </div>
          <div>
          <Image src={client10} className={'img-fluid'} />
          </div>
         
        </Slider>
      </div>
    );
  
}