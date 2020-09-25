import React from 'react';
import { Link, useParams } from 'react-router-dom';
import DestinationFakeData from '../../fakeData/DestinationFakeData'
import './DestinationBooking.css'

const DestinationBooking = () => {
    const {destination}=useParams();
    const matchedItem=DestinationFakeData.find(matchItem=>matchItem.destination.toLowerCase()==destination);

    return (
        <div className='row wrapper d-flex mx-5 px-5'>
            <div className="col-md-5 description mr-5 p-3">
                <h2>{matchedItem.destination} </h2>
                <p>{matchedItem.description} </p>
            </div>
            <div className= "booking-form col-md-4 py-4  ml-5 ">
                <form action="" onSubmit="">
                    <label htmlFor="" className='ml-5 py-1' >Origin</label><br/>
                    <input type="text" className="w-75 ml-5 pl-1 " /><br/>
                    <label htmlFor="" className='ml-5 py-1'>Destination</label><br/>
                    <input type='text' className='w-75 ml-5 pl-1' /><br/>
                    <label htmlFor="" className="mr-5 pr-5 ml-5 py-1 " >From</label><label htmlFor="" className='ml-3 pl-3 py-1'>To</label><br/>
                    <input type="month" className='inline-input mr-2 ml-5 pl-1' />
                    <input type="month" className='inline-input ml-2 pl-1' /><br/><br/>
                <Link to={`/booking-${matchedItem.destination.toLowerCase()}/hotel-details`}><button className="btn submit btn-warning px-3 py-2" type="submit">Start Booking</button></Link>
                </form>
            </div>
        </div>
    )
};

export default DestinationBooking;