import React, { createContext, useState } from 'react';
import logo from './Logo.png';
import './App.css';
import Appbar from "./Components/Appbar/Appbar"
import Home from './Components/Home/Home';
import { Route,BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import HotelDetail from './Components/HotelDetail/HotelDetail';
import DestinationBooking from './Components/DestinationBooking/DestinationBooking';
import MapView from './Components/Map/MapView';
import ForgetPassword from './Components/Login/ForgetPassword/ForgetPassword';
export const IsLoggedContext=createContext()

function App() {
  const [isLogged,setIsLogged]=useState(false)
  return (
    <IsLoggedContext.Provider value={[isLogged,setIsLogged]}>
    <Router>
      <div className="App">
        <Appbar></Appbar>
      </div>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route exact path='/booking-:destination'>
          <DestinationBooking></DestinationBooking>
        </Route>
        <PrivateRoute path='/booking-:destination/hotel-details'>
          <HotelDetail></HotelDetail>
        </PrivateRoute>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/password-forget'>
          <ForgetPassword></ForgetPassword>
        </Route>
    </Router>
    </IsLoggedContext.Provider>
  );
}

export default App;
