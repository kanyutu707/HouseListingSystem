import React from 'react'
import './ClientNavigation.css'
import { useNavigate } from 'react-router-dom'
const ClientNavigation = () => {
  const navigate=useNavigate();
  const moveToHome=()=>{
      navigate('/client/')
  }
  const moveToActiveBookings=()=>{
    navigate('/client/activebookings/');
  }
  const moveToPastBookings=()=>{
    navigate('/client/pastbookings/');
  }
  const moveToAccount=()=>{
    navigate('/client/account')
  }
  const logout=()=>{
    navigate('/')
    window.alert("LOGOUT SUCCESSFUL")
  }
  return (
    <div className='clientnavigationcontainer'>
        <section className="logo">
            HOTEL BOOKING SYSTEM
        </section>
        <section className="navs">
            <span onClick={moveToHome}>HOME</span>
            <span onClick={moveToActiveBookings}>ACTIVE BOOKINGS</span>
            <span onClick={moveToPastBookings}>PAST BOOKINGS</span>
            <span onClick={moveToAccount}>ACCOUNT</span>
            <span onClick={logout}>LOGOUT</span>
        </section>
    </div>
  )
}

export default ClientNavigation