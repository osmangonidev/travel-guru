import React, { useState } from 'react';
import './Home.css';
import {Link, BrowserRouter as Router} from "react-router-dom";
import DestinationFakeData from '../../fakeData/DestinationFakeData';

const Home = () => {

    const [destination,setDestination]=useState(DestinationFakeData[0]);
    const [style,setStyle]=useState({})
    function imgClickedHandle(destinationId=1){
        const item=DestinationFakeData.find(item=>item.id==destinationId);
        setDestination(item);
        setStyle({border:"1px solid red"})
    }
    
    return (
        <div className='row wrapper'>
            <div id='destination-detail' className="col-md-5">
                <h2 className="text-white">{ destination.destination} </h2>
                <p>{destination.description} </p>
                <button className='btn btn-warning px-3 py-2'><Link to={`/booking-${destination.destination.toLowerCase()}`}>Booking </Link></button>
            </div>
            <div id='destination-images' className='d-flex justify-content-end col-md-7 row'>
                {DestinationFakeData.map((item)=>{
                        return(
                            <div class="col-md-4">
                                <img onMouseEnter={()=>imgClickedHandle(item.id)} class="img" src={item.img} alt="Card image cap"></img>
                                <h4 className='img-title'>{item.destination}</h4>    
                            </div>
                    
                        )
                    }
                )};
            </div>
        </div>
    );
};


export default Home;

