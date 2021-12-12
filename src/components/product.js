import React,{useState,useContext} from 'react';
import {Col} from 'reactstrap';
import { cartContext } from '../App';


const Product =  ({name,Price}) => {
    const cartProduct = useContext(cartContext);

    const [addProduct, setAddProduct] = useState(false);

    const handleAddToCart = () =>{
        setAddProduct(true);
        cartProduct.updateProduct(cartProduct.productState + 1);
    }
    const handleRemoveToCart = () =>{
        setAddProduct(false);
        cartProduct.updateProduct(cartProduct.productState - 1);
    }
    return(
        <React.Fragment>
            {/* CRUD  full form create read update delete */}
            
                <>
                    <Col sm={3}>
                        <div className="card shadow mb-4">
                            <div className="card-body">
                                <h3 className='fs-4'>{name}</h3>
                                <h2 className='fs-5 mb-4'>$ {Price}</h2>
                                {!addProduct ? <button className='btn btn-info text-white' onClick={handleAddToCart} >Add to card</button>:
                                <button className='btn btn-info text-white' onClick={handleRemoveToCart}>Remove to cart</button>
                                }
                                
                            </div>
                        </div>
                    </Col>
                </>
            
            
            
        </React.Fragment>
    )

}



export default Product;