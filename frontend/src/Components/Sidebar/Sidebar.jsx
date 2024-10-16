import React from 'react'
import './Sidebar.css'
import { AiFillDashboard } from "react-icons/ai";
import { MdCircleNotifications, MdDateRange, MdFreeCancellation, MdLineStyle, MdRoomService, MdSensorOccupied, MdStayCurrentPortrait } from 'react-icons/md';
import { IoMdLogOut } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate=useNavigate();
    const moveToDashboard=()=>{
            navigate('/admin/')
    }
    const moveToCurrentClients=()=>{
        navigate('/admin/currentclients')
    }
    const moveToPastClients=()=>{
        navigate('/admin/pastclients')
    }
    const moveToRentals=()=>{
      navigate('/admin/rentals')
    }
    const moveToForSale=()=>{
      navigate('/admin/forsale')
    }
    const logout=()=>{
      navigate('/')
      alert('LOGOUT SUCCESSFUL')
    }
  return (
    <div className='sidebarcontainer'>
        <header><span>ADMIN</span> <MdLineStyle/></header>
        <span className="mainnav" onClick={moveToDashboard}>
           <AiFillDashboard/> DASHBOARD
        </span>
        <span className="mainnav" onClick={moveToCurrentClients}>
           <MdCircleNotifications/> CLIENTS
        </span>
        <span className="subnav" onClick={moveToCurrentClients}>
           <MdStayCurrentPortrait/>  CURRENT   
        </span>
        <span className="subnav" onClick={moveToPastClients}>
          <MdDateRange/>  PAST
        </span>
        <span className="mainnav" onClick={moveToRentals}>
          <MdRoomService/>  HOUSES
        </span>
        <span className="subnav" onClick={moveToRentals}>
           <MdSensorOccupied/> RENTALS
        </span>
        <span className="subnav" onClick={moveToForSale}>
          <MdFreeCancellation/>  FOR SALE
        </span>
        <span className="mainnav" onClick={logout}>
            <IoMdLogOut/> LOGOUT
        </span>
    </div>
  )
}

export default Sidebar