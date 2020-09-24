import React from 'react';
import logo from "./Logo.png"
import './Appbar.css'
import {Link, BrowserRouter as Router} from "react-router-dom";

const Appbar = () => {
    const navItem=['Home','Destination','Blog','Login'];
    return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                        <img className="navbar-brand logo ml-5" src={logo} alt=""/>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <form className="form-inline my-2 my-lg-0">
                            <input size="50" className="form-control  pl-3" type="search" placeholder="Search your destination" aria-label="Search"></input>
                        </form>
                        <ul className="navbar-nav mr-auto mt-0 mt-lg-0">
                        {navItem.map((item,count)=><li className="nav-item "><Link to={`/${item.toLowerCase()}`} className="nav-link"><a className={`item${navItem.indexOf(item)}`}>{item}</a> </Link></li>)}
                        </ul>
                        
                    </div>
                </nav>
            </div>   
    )
    
};

export default Appbar;