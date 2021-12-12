import React from "react";
import Banner from "../components/newBanner";
import Loop from "../components/loop";
import bannerImg from '../images/banner.jpg';
import bannerImg1 from '../images/banner1.jpg';
import bannerImg2 from '../images/banner2.jpg';
import Imgcard from "../images/img1.jpg";
import Imgcard2 from "../images/banner1.jpg";
import Imgcard3 from "../images/slide1.jpg";
import Imgcard4 from "../images/img4.jpg";
import WhatWeDo from '../components/section2';
import Product from "../components/product";
import { Row,Container } from "reactstrap";

const data=[
    {'img':bannerImg, bannerText:"Welcome home", discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    {'img':bannerImg1, bannerText:"Welcome home", discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    {'img':bannerImg2, bannerText:"Welcome home", discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
]

var allCard = [
    {'img':Imgcard, name: "Sofa Living",age: "240", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repellendus?"},
    {'img':Imgcard2, name: "Staff Chair",age: "190", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repellendus?"},
    {'img':Imgcard3, name: "Room Sofa",age: "210", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repellendus?"},
    {'img':Imgcard4, name: "Morden Sofa",age: "289", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repellendus?"}
]

const allProduct=[
    {'name':"Bad", 'Price':3800,},
    {'name':"Sofa", 'Price':4800,},
    {'name':"Table", 'Price':2800,},
    {'name':"Desk", 'Price':3000,}
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
             
             <Container className="py-5">
                 <Row clasaName="py-5 mt-5">
                    {allCard.map((eachCard) => <Loop name={eachCard.name} age={eachCard.age} img={eachCard.img} discription={eachCard.description} />)}
                 </Row>
             </Container>
            
        </React.Fragment>
    )
}


export default Home;