import React from "react";
import Imgcard from "../images/imgslide.jpg"
import { Col,Row, Container,Card } from 'reactstrap';


var Data = [
    {name: "saurabh",age: "24", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repellendus?"},
    {name: "shadab",age: "19", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repellendus?"},
    {name: "sahnoo",age: "21", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repellendus?"},
    {name: "rohit",age: "28", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repellendus?"}
]

const Loop = () =>{
    return(
        <> 
        <section className="bg-light">
        <Container fluid="xxl" className="">
                <Row className="">
                    <h2 className="text-dark text-center mb-5" style={{}}>Over Products</h2>
                    {Data.map(eachdata => 
                    <Col xs={12} lg={3} className="">
                        <Card className="">
                            <img src={Imgcard} className="img-fluid" alt="" />
                            <div className="card-body">
                            <h5 className="card-title fs-4">{eachdata.name}</h5>
                            <span>Age: {eachdata.age}</span>
                            <p className="card-text">{eachdata.description}</p>
                            <a href="#" className="btn btn-warning text-white rounded-pill py-2 fs-6">Go somewhere</a>
                            </div>
                        </Card>    
                    </Col>
                    )}
                </Row>
            </Container>
        </section>
        </>
    )
}
export default Loop;