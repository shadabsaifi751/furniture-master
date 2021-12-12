import React,{useState,useContext} from "react";
// import Imgcard from "../images/imgslide.jpg"
import { Col,Card } from 'reactstrap';
import { cartContext } from "../App";



const Loop = ({name,age,discription,img}) =>{
    const cartProduct = useContext(cartContext);

    const [addProdcut, setAddProduct] =useState(false);

    const  HandleAddtoCart= () => {
        setAddProduct(true);;
        cartProduct.updateProduct(cartProduct.productState + 1);
    }
    const  RemoveHandletoCart= () => {
        setAddProduct(false);
        cartProduct.updateProduct(cartProduct.productState - 1);
    }


    return(
        <> 
        
        
                    {/* <h2 className="text-dark text-center mb-5" style={{}}>Over Products</h2> */}
                   
                    <Col xs={6} lg={3} className="">
                        <Card className="">
                            <img src={img} className="img-fluid" alt="" />
                            <div className="card-body">
                            <h5 className="card-title fs-4">{name}</h5>
                            <span className="fw-bold fs-5">${age}</span>
                            <p className="card-text">{discription}</p>
                            {!addProdcut ? <button className="btn btn-info text-white fs-6" onClick={HandleAddtoCart}>Add to cart</button>:
                            <button className="btn btn-info text-white fs-6" onClick={RemoveHandletoCart}>Remove to cart</button>}
                            </div>
                        </Card>    
                    </Col>
               
  
        </>
    )
}
export default Loop;