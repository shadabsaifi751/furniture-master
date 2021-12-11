import React from "react";
import Banner from '../components/newBanner';
import slide1 from '../images/slide1.jpg';
import banner5 from '../images/banner5.jpg';
import banner4 from '../images/banner4.png';

const data= [
    {'img':banner5, bannerText:"service", discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    {'img':slide1, bannerText:"service", discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    {'img':banner4, bannerText:"service", discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
]

const Service = () => {
    return(
        <React.Fragment>
           <Banner MainSlider={data} bannerText="Services"/>
        </React.Fragment>
    )
}

export default Service;