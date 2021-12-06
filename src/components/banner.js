import React, {useState} from "react";
import myImage from '../images/banner.jpg';
import myImage1 from '../images/banner1.jpg';
import myImage2 from '../images/banner2.jpg';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import SwiperCore, {Parallax,Pagination,Navigation} from 'swiper';

SwiperCore.use([Parallax,Pagination,Navigation]);


const Banner = () => {
    const parallaxOpacity = 0.5;

    return(
        <div className="banner">
            <Swiper
            spaceBetween={0}
            slidesPerView={1}
            centeredSlides
            loop={true}
            speed={1000}
            parallax={true}
            onSlideChange={() => console.log("slide change")}
            onSwiper={swiper => console.log(swiper)}
            >
            <SwiperSlide>
                <div className="img-div" ><img src={myImage1} alt="" /><img data-swiper-parallax="50%" className="prl-image" src={myImage} alt="" /></div></SwiperSlide>
            <SwiperSlide>
                <div className="img-div" ><img src={myImage2} alt="" /><img data-swiper-parallax="50%" className="prl-image" src={myImage1} alt="" /></div></SwiperSlide>
            <SwiperSlide>
                <div className="img-div" ><img src={myImage1} alt="" /><img data-swiper-parallax="50%" className="prl-image" src={myImage2} alt="" /></div></SwiperSlide>
            </Swiper>
            
        </div>
    )
}

export default Banner;