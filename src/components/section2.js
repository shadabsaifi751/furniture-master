import React from "react";
import {Col, Row ,Container } from "reactstrap";
import secimg from '../images/banner5.jpg';

const WhatWeDo = () => {
    return(
        <section className="bg-white py-5 section-1 position-relative">
            <Container>
                <Row className="gx-5">
                    <Col sm={12} md={7}>
                        <img src={secimg} className="img-fluid" alt="" />
                    </Col>
                    <Col sm={12} md={5}>
                    
                        <div className="blob position-absolute" dangerouslySetInnerHTML={{__html: `
                        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
                        <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style="stop-color: rgb(225, 89, 195);"></stop>
                            <stop offset="100%" style="stop-color: rgb(223, 50, 52);"></stop>
                        </linearGradient>
                        </defs>
                        <path fill="url(#gradient)">
                            <animate 
                                attributeName="d"
                                dur="10000ms"
                                repeatCount="indefinite"



                                values="M440.5,302.5Q395,355,356.5,406.5Q318,458,253.5,448Q189,438,118.5,417Q48,396,53.5,323Q59,250,63,183.5Q67,117,129,93Q191,69,258,44.5Q325,20,366.5,77.5Q408,135,447,192.5Q486,250,440.5,302.5Z;
                            

                                M441,318Q437,386,374,411.5Q311,437,249.5,439.5Q188,442,143,401.5Q98,361,65.5,305.5Q33,250,45.5,180.5Q58,111,124,88.5Q190,66,257.5,43Q325,20,369.5,75.5Q414,131,429.5,190.5Q445,250,441,318Z;
                                
                                
                                M440.5,308Q409,366,362.5,410Q316,454,244.5,470Q173,486,123,432Q73,378,39.5,314Q6,250,47,191.5Q88,133,136.5,92Q185,51,249,53Q313,55,380,81Q447,107,459.5,178.5Q472,250,440.5,308Z;
                                M442,314Q426,378,366,400Q306,422,240.5,452Q175,482,135.5,422Q96,362,82,306Q68,250,64.5,181.5Q61,113,122.5,79.5Q184,46,248.5,51.5Q313,57,366.5,92Q420,127,439,188.5Q458,250,442,314Z;
                                M440.5,302.5Q395,355,356.5,406.5Q318,458,253.5,448Q189,438,118.5,417Q48,396,53.5,323Q59,250,63,183.5Q67,117,129,93Q191,69,258,44.5Q325,20,366.5,77.5Q408,135,447,192.5Q486,250,440.5,302.5Z;
                            "
                                
                            ></animate>
                        </path>
                    </svg>
                        `}}></div>
                        <div className="blob position-absolute" dangerouslySetInnerHTML={{__html: `
                        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
                        <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style="stop-color: rgb(225, 89, 195);"></stop>
                            <stop offset="100%" style="stop-color: rgb(223, 50, 52);"></stop>
                        </linearGradient>
                        </defs>
                        <path fill="url(#gradient)">
                            <animate 
                                attributeName="d"
                                dur="10000ms"
                                repeatCount="indefinite"



                                values="M440.5,302.5Q395,355,356.5,406.5Q318,458,253.5,448Q189,438,118.5,417Q48,396,53.5,323Q59,250,63,183.5Q67,117,129,93Q191,69,258,44.5Q325,20,366.5,77.5Q408,135,447,192.5Q486,250,440.5,302.5Z;
                            

                                M441,318Q437,386,374,411.5Q311,437,249.5,439.5Q188,442,143,401.5Q98,361,65.5,305.5Q33,250,45.5,180.5Q58,111,124,88.5Q190,66,257.5,43Q325,20,369.5,75.5Q414,131,429.5,190.5Q445,250,441,318Z;
                                
                                
                                M440.5,308Q409,366,362.5,410Q316,454,244.5,470Q173,486,123,432Q73,378,39.5,314Q6,250,47,191.5Q88,133,136.5,92Q185,51,249,53Q313,55,380,81Q447,107,459.5,178.5Q472,250,440.5,308Z;
                                M442,314Q426,378,366,400Q306,422,240.5,452Q175,482,135.5,422Q96,362,82,306Q68,250,64.5,181.5Q61,113,122.5,79.5Q184,46,248.5,51.5Q313,57,366.5,92Q420,127,439,188.5Q458,250,442,314Z;
                                M440.5,302.5Q395,355,356.5,406.5Q318,458,253.5,448Q189,438,118.5,417Q48,396,53.5,323Q59,250,63,183.5Q67,117,129,93Q191,69,258,44.5Q325,20,366.5,77.5Q408,135,447,192.5Q486,250,440.5,302.5Z;
                            "
                                
                            ></animate>
                        </path>
                    </svg>
                        `}}></div>

                        <h5 className="fs-4 text-white mt-4">What We Do</h5>
                        <h3 className=" text-light display-6">Lorem ipsum dolor, sit amet consectetur </h3>
                        <p className="text-warning fw-light small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae neque nesciunt nemo esse error incidunt assumenda, nobis perferendis ullam reiciendis quae deserunt maiores inventore ad exercitationem odit quos quam? Velit est nobis, ab blanditiis odio incidunt nisi minus laboriosam consequuntur.</p>
                        <button className="btn btn-info shadow px-4 text-white fs-6">Click here</button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default WhatWeDo;