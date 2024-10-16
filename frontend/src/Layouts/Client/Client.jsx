import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../Pages/Home/Home'
import ClientNavigation from '../../Components/ClientNavigation/ClientNavigation'
import ActiveBookings from '../../Pages/ActiveBookings/ActiveBookings'
import PastBooking from '../../Pages/PastBookings/PastBooking'
import Account from '../../Pages/Account/Account'
import NewRoom from '../../Pages/NewRoom/NewRoom'
import View from '../../Pages/View/View'
const Client = () => {
  return (
    <div className='clientcontainer'>
        <ClientNavigation/>
      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/activebookings' element={<ActiveBookings/>}/>
            <Route path='/pastbookings' element={<PastBooking/>}/>
            <Route path='/account/*' element={<Account/>}/>
            <Route path='/addhouse' element={<NewRoom/>}/>
            <Route path='/view/:id' element={<View/>}/>
      </Routes>
    </div>
  )
}

export default Client
