import React from "react";
import Banner from "../components/newBanner";
import Loop from "../components/loop";
import bannerImg from '../images/banner.jpg'
import WhatWeDo from '../components/section2';


const Home = () => {
    return(
        <React.Fragment>
            <Banner bannerImages={bannerImg} bannerText="Welcome Home"/>
             <WhatWeDo/>
            <Loop/>
        </React.Fragment>
    )
}


export default Home;