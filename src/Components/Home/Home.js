import React, { useState } from 'react';
import './Home.css';
import {Link, BrowserRouter as Router} from "react-router-dom";
import DestinationFakeData from '../../fakeData/DestinationFakeData';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Home = () => {

    const [destination,setDestination]=useState(DestinationFakeData[0]);
   
    function imgHoverHandle(destinationId=1){
        const item=DestinationFakeData.find(item=>item.id==destinationId);
        setDestination(item);
        activeStyle(count);  //add style for hover image
        document.getElementById(`img-${count}`).style.border='none' //default first image border none because hover image border applied.
    }
    const [count,setCount]=useState(1)

    function handleLeftClick(){
        if(count>1){
            setCount(count-1)
        }
        else{
            setCount(3)
        }
        imgHoverHandle(count); //change data for right click
        activeStyle(count)
    }

    function handleRightClick(){
        if(count<3){
            setCount(count+1)
        }
        else{
            setCount(1)
        }

        imgHoverHandle(count) //change data for right click
        activeStyle(count)
    }

    // active image style
    function activeStyle(num){
        if(num!=2){
            document.getElementById('img-2').style.border='none'
        }
        if(num!=3){
            document.getElementById('img-3').style.border='none'
        }
        if(num!=1){
            document.getElementById('img-1').style.border='none'
        }
        const element = document.getElementById(`img-${num}`);
        element.classList.add("img-active");
        document.getElementById('img-1').style.border='none'
        document.getElementById(`img-${num}`).style.border='3px solid orange'
    }
    
    
    return (
        <div className='row wrapper'>
            <div id='destination-detail' className="col-md-5 mr-4 p-4">
                <h2 className="text-white">{ destination.destination} </h2>
                <p>{destination.description} </p>
                <button className='btn btn-warning px-3 py-2'><Link to={`/booking-${destination.destination.toLowerCase()}`}>Booking </Link></button>
            </div>
            <div id='destination-images' className='d-flex justify-content-end col-md-7 row'>
                {DestinationFakeData.map((item)=>{
                        return(
                            <div class="col-md-4">
                                <img onMouseEnter={()=>imgHoverHandle(item.id)} class="img img-active" id={`img-${item.id}`} src={item.img} alt="Card image cap"></img>
                                <h4 className='img-title'>{item.destination}</h4> 
     
                            </div>
                    
                        )
                    }
                )}
                <span onClick={handleLeftClick} className='left-arrow '><ArrowBackIosIcon></ArrowBackIosIcon> </span><span onClick={handleRightClick} className=' right-arrow'><ArrowForwardIosIcon></ArrowForwardIosIcon> </span>
            </div>
        </div>
    );
};


export default Home;

