import React from "react";
import {Col, Row ,Container  } from "reactstrap";
import secimg from '../images/banner.jpg';

const WhatWeDo = () => {
    return(
        <section className="bg-white py-5">
            <Container>
                <Row className="gx-5">
                    <Col sm={12} md={7}>
                        <img src={secimg} className="img-fluid" alt="" />
                    </Col>
                    <Col sm={12} md={5}>
                        <h5 className="fs-4">What We Do</h5>
                        <h3 className="text-danger display-5">Lorem ipsum dolor, sit amet consectetur </h3>
                        <p className="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae neque nesciunt nemo esse error incidunt assumenda, nobis perferendis ullam reiciendis quae deserunt maiores inventore ad exercitationem odit quos quam? Velit est nobis, ab blanditiis odio incidunt nisi minus laboriosam consequuntur.</p>
                        <button className="btn btn-danger rounded-pill px-5 py-2 fs-5">Click here</button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default WhatWeDo;