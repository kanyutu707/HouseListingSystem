import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Client from './Layouts/Client/Client';
import Index from './Pages/Index/Index';
import Admin from './Layouts/Admin/Admin';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';

function App() {
 
  return (
    <div className='appContainer'>
    <BrowserRouter>
    
      <Routes>
        <Route path='' element={<Index/>}/>
        <Route path='/client/*' element={<Client/>}/>
        <Route path='/admin/*' element={<Admin/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
