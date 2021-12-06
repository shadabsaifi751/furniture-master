import React from "react";
import Banner from '../components/banner';
import bannerImg from '../images/banner2.jpg';


const Service = () => {
    return(
        <React.Fragment>
           <Banner bannerImages={bannerImg} bannerText="Services"/>
        </React.Fragment>
    )
}

export default Service;