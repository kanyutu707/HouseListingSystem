import React from 'react'
import { MdArrowBack, MdArrowForward, MdArrowLeft, MdArrowRight } from 'react-icons/md'
import './Payments.css'
const Payments = () => {
  return (
    <div className='paymentscontainer'>
    <header>PAYMENTS</header>
    <table>
      <caption>
        <span className="controls">
      <MdArrowBack/>
      <MdArrowLeft/>
      <span className="pagenumber">1/25</span>
      <MdArrowRight/>
      <MdArrowForward/>
      </span>
     
      <input type="search"  placeholder='SEARCH DATA...'/>
      </caption>
      <thead>
        <th>#</th>
        <th>AMOUNT</th>
        <th>STARTING DATE</th>
        <th>END DATE</th>
      
        
      </thead>
      <tbody>
        <tr>
          <td>1C</td>
          <td>5000</td> 
          <td>15/3/2000</td>
          <td>17/4/2020</td>
          
          
        </tr>  
        <tr>
          <td>1C</td>
          <td>5000</td> 
          <td>15/3/2000</td>
          <td>17/4/2020</td>
          
          
        </tr>  
        <tr>
          <td>1C</td>
          <td>5000</td> 
          <td>15/3/2000</td>
          <td>17/4/2020</td>
          
          
        </tr>  
        <tr>
          <td>1C</td>
          <td>5000</td> 
          <td>15/3/2000</td>
          <td>17/4/2020</td>
          
          
        </tr>  
  
      </tbody>
    </table>
  </div>
  )
}

export default Payments