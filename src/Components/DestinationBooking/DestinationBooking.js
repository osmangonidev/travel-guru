import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import DestinationFakeData from '../../fakeData/DestinationFakeData'
import './DestinationBooking.css'

const DestinationBooking = () => {
    const {destination}=useParams();
    const matchedItem=DestinationFakeData.find(matchItem=>matchItem.destination.toLowerCase()==destination);
    
    function handleBookingSubmit(e){
        e.preventDefault()
        window.location.replace(`/booking-${destination}/hotel-details`)
    }
    
    return (
        <div className='row wrapper d-flex mx-5 px-5'>
            <div className="col-md-5 description mr-5 p-3">
                <h2>{matchedItem.destination} </h2>
                <p>{matchedItem.description} </p>
            </div>
            <div className= "booking-form col-md-6 py-4  ">
                <form action="" onSubmit={handleBookingSubmit}>
                    <label htmlFor="" className='ml-5 py-1' >Origin</label><br/>
                    <input  type="text" className="w-75 ml-5 pl-1 " name='origin' required/><br/>
                    <label htmlFor="" className='ml-5 py-1'>Destination</label><br/>
                    <input  type='text' className='w-75 ml-5 pl-1' name='destination' required /><br/>
                    <label htmlFor="" className="mr-5 pr-5 ml-5 py-1 " >From</label><label htmlFor="" className='ml-5 pl-5 py-1'>To</label><br/>
                    <input  type="month" className='inline-input mr-1 ml-5 pl-1' name='from' required />
                    <input  type="month" className='inline-input ml-1 pl-1'name='to' required /><br/><br/>
                    <button  className="btn submit btn-warning px-3 py-2" type="submit">Start Booking</button>
                </form>
            </div>
        </div>
    )
};

export default DestinationBooking;