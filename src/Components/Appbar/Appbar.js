import React, { useContext } from 'react';
import logo from "./Logo.png"
import './Appbar.css'
import {Link, BrowserRouter as Router} from "react-router-dom";
import { IsLoggedContext } from '../../App';
import firebase from 'firebase';
import FirebaseConfig from '../../FirebaseConfig';

if(!firebase.apps.length){
    firebase.initializeApp(FirebaseConfig);
}

const Appbar = (props) => {
    const navItems=['Home','Destination','Blog'];
    const [isLogged,setIsLogged]=useContext(IsLoggedContext) //if logged or not toggle login and log-out nav item

    function handleLogOut(){ //no log-out route or component so it's handled here
        firebase.auth().signOut()
        .then(()=>{
            setIsLogged(false);
            window.location.replace('/login')
        })
        .catch((error)=> {
            alert(error)
        });
    }

    return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                        <img className="navbar-brand logo ml-5" src={logo} alt=""/>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <form className="form-inline my-2 my-lg-0">
                            <input size="50" className="form-control  pl-3" id='search' type="search" placeholder='       Search your destination' aria-label="Search"></input>
                        </form>
                        <ul className="navbar-nav mr-auto mt-0 mt-lg-0">
                        {navItems.map((item,count)=><li className="nav-item "><Link to={`/${item.toLowerCase()}`} className="nav-link"><a className={`item${navItems.indexOf(item)}`}>{item}</a> </Link></li>)}
                        {
                            isLogged?<li onClick={handleLogOut} className='nav-item'><a className='item4 nav-link'>Log-Out</a></li>
                            :<li className='nav-item'><Link to='/login' className='nav-link'><a className='item4'>Login</a></Link> </li>
                        }
                        </ul>
                        
                    </div>
                </nav>
            </div>   
    )
    
};

export default Appbar;