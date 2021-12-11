import React from "react";
import Banner from "../components/newBanner";
import Loop from "../components/loop";
import bannerImg from '../images/banner.jpg';
import bannerImg1 from '../images/banner1.jpg';
import bannerImg2 from '../images/banner2.jpg';
import WhatWeDo from '../components/section2';
import Product from "../components/product";
import { Row,Container } from "reactstrap";

const data=[
    {'img':bannerImg, bannerText:"Welcome home", discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    {'img':bannerImg1, bannerText:"Welcome home", discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    {'img':bannerImg2, bannerText:"Welcome home", discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
]

const allProduct=[
    {'name':"Realme", 'Price':3800,},
    {'name':"Redmi", 'Price':4800,},
    {'name':"Oppo", 'Price':2800,},
    {'name':"Vivo", 'Price':3000,}
]

const Home = () => {
    return(
        <React.Fragment>
            <Banner MainSlider={data}/>
            <Container>
            <Row>
            {allProduct.map((eachProduct) => <Product name={eachProduct.name} Price={eachProduct.Price}/>)}</Row>
            
            </Container>
             <WhatWeDo/>
            <Loop/>
        </React.Fragment>
    )
}


export default Home;