import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import AdminNavbar from '../../Components/AdminNavbar/AdminNavbar'
import './Admin.css'
import {Routes, Route} from 'react-router-dom'
import Dashboard from '../../Pages/Dashboard/Dashboard'
import CurrentUser from '../../Pages/CurrentClients/CurrentClients'
import PastClients from '../../Pages/PastClients/PastClients'
import Sale from '../../Pages/Sale/Sale'
import Rentals from '../../Pages/Rentals/Rentals'

const Admin = () => {
  return (
    <div className='admincontainer'>
      <Sidebar/>
      <section>
        <AdminNavbar/>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/currentclients' element={<CurrentUser/>}/>
            <Route path='/pastclients' element={<PastClients/>}/>
            <Route path='/rentals' element={<Rentals/>}/>
            <Route path='/forsale' element={<Sale/>}/>
            
          </Routes>
        </div>
      </section>
    </div>
  )
}

export default Admin
