import React from "react";
import Header from "./components/Header";
import './styles/style.css';
import './styles/media.css';
import Home from './Page/Home';
import About from './Page/about';
import Contact from './Page/contact';
import Service from './Page/service';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



const App = () => {
  return(
    <>
    <Router>
        <Header/>

        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/service" component={Service}/>
        </Switch>
    </Router>
   
    
    </>
  )
}

export default App;