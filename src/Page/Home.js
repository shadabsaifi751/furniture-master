import React from "react";
import Banner from "../components/newBanner";
import Loop from "../components/loop";
import bannerImg from '../images/banner.jpg';
import bannerImg1 from '../images/banner1.jpg';
import bannerImg2 from '../images/banner2.jpg';
import WhatWeDo from '../components/section2';

const data=[
    {'img':bannerImg, bannerText:"Welcome home", discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    {'img':bannerImg1, bannerText:"Welcome home", discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    {'img':bannerImg2, bannerText:"Welcome home", discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
]


const Home = () => {
    return(
        <React.Fragment>
            <Banner MainSlider={data}/>
             <WhatWeDo/>
            <Loop/>
        </React.Fragment>
    )
}


export default Home;