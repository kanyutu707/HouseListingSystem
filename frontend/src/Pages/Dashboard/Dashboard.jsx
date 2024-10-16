import React from 'react'
import { AiFillDashboard } from 'react-icons/ai'
import './Dashboard.css'
import Stats from '../../Components/Stats/Stats'
const Dashboard = () => {
  return (
    <div className='dashboardcontainer'>
        <header><AiFillDashboard/> DASHBOARD</header>
        <Stats/>
    </div>
  )
}

export default Dashboard