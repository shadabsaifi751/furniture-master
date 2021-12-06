import React, {useState} from "react";
import Logo from '../images/logo.png';
import Popup from '../components/popup';
import {
    Link,
  } from "react-router-dom";
  

const Header = () => {
    // popup start
    const [isOpen ,setIsOpen] = useState(false);
    const togglePopup = () =>{
        setIsOpen(!isOpen);
    }
    // popup end

    const [navState, setNavState] = useState(false);

    const [windowWidth , setWidth] = useState(window.innerWidth);

    window.addEventListener('resize', function(){
        setWidth(this.innerWidth);
    });

    return(
        <header className={navState ? 'navopen' : 'navclosed'}>

            
            <ul className="left-menu">
                {
                // conditional rendering
                (windowWidth > 992) ?
                    <>
                    <li><Link to="/" className="nav-link text-white fs-5 fw-normal">Home</Link></li>
                    <li><Link to="/about" className="nav-link text-white fs-5 fw-normal">About</Link></li>
                    <li><Link to="/contact" className="nav-link text-white fs-5 fw-normal">Contact</Link></li>
                    </>
                    :
                    ""
                }
            </ul>

            <Link to="/" className="logo">
                <img src={Logo} alt="" />
            </Link>

            <ul className="right-menu">
                {
                // conditional rendering
                (windowWidth < 992) ?
                    <>
                    <li><Link to="/"  className="nav-link text-white fs-5 fw-normal">Home</Link></li>
                    <li><Link to="/about" className="nav-link text-white fs-5 fw-normal">About</Link></li>
                    <li><Link to="/contact" className="nav-link text-white fs-5 fw-normal">Contact</Link></li>
                    </>
                    :
                    ""
                }
                <li><Link to="/service" className="nav-link text-white fs-5 fw-normal">Service</Link></li>
                <li><Link to="/about" className="nav-link text-white fs-5 fw-normal">What we Do</Link></li>
                <li><Link to="/" className="nav-link text-white fs-5 fw-normal" onClick={togglePopup} >LogIn / Singup</Link>
                { isOpen && < Popup 

                        content = { <>
                            <img src={Logo} style={{marginTop:"30px",padding:"12px",background:"#df7c9975",display:"block",margin:"0 auto",boxShadow:" 0px 1px 20px rgba(0, 0, 0, 27%)"}} alt="" />
                            <h2 className="mb-5">Login Account</h2>
                            <input type="email" placeholder="Email" className="form-control" />
                            <input type="password" placeholder="Password" className="form-control" />
                            <div>
                                <button className="btn">Sign In</button>
                            </div>
                            <a href="#" className="text">Sign Up / Forgot</a>
                        </>
                        }
                        handleClose={togglePopup} 
                    />}
                </li>
            </ul>

            <div className="phone-menu" onClick={()=> setNavState(!navState)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    )
}

export default Header;