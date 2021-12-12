import React, {useState} from "react";
import Header from "./components/Header";
import './styles/style.css';
import './styles/media.css';
import Home from './Page/Home';
import About from './Page/about';
import Contact from './Page/contact';
import Service from './Page/service';
import Cart from './Page/cart';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export const cartContext = React.createContext();

const App = () => {
  const [cartProduct, setCartProduct] = useState('0');
  return(
    <>
    <cartContext.Provider value={{
      productState:cartProduct,
      updateProduct:setCartProduct
    }}>
    <Router>
        <Header/>

        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/service" component={Service}/>
            <Route exact path="/cart" component={Cart}/>
        </Switch>
    </Router>
    </cartContext.Provider>
   
    
    </>
  )
}

export default App;