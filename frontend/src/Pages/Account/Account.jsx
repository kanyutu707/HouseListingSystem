import React from 'react'
import './Account.css'
import {Route, Routes, useNavigate} from 'react-router-dom'
import Postings from '../Postings/Postings'
import Payments from '../Payments/Payments'

const Account = () => {
    const navigate=useNavigate();
    const moveToPostings=()=>{
        navigate('/client/account/')
    }
    const moveToPayments=()=>{
        navigate('/client/account/payments')
    }
    const addRoom=()=>{
        navigate('/client/addhouse')
    }
  return (
    <div className='accountcontainer'>
        <form className='accounts'>
            
            <header>ACCOUNT</header>
            <span className="input_group">
                <label htmlFor="">FIRST NAME</label>
                <input type="text" placeholder={sessionStorage.getItem('firstName')} />
            </span>
            <span className="input_group">
                <label htmlFor="">LAST NAME</label>
                <input type="text" placeholder={sessionStorage.getItem('lastName')}/>
            </span>
            <span className="input_group">
                <label htmlFor="">EMAIL</label>
                <input type="email" placeholder={sessionStorage.getItem('email')} />
            </span>
            <button>EDIT</button>
          
        </form>
        
        <div className='accountdet'>
        <button onClick={addRoom}>ADD ROOM</button>
            <section className="accountnav">
                <span onClick={moveToPostings}>
                      MY  POSTINGS
                </span>
                <span onClick={moveToPayments}>
                    BILLS & PAYMENTS
                </span>
               
            </section>
            <div className='otherdets'>
                    <Routes>
                    <Route path='' element={<Postings/>}/>
                    <Route path='payments' element={<Payments/>}/>
                    </Routes>
                </div>
        </div>
    </div>
  )
}

export default Account