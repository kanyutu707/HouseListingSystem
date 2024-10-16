import React from 'react'
import { MdArrowBack, MdArrowForward, MdArrowLeft, MdArrowRight } from 'react-icons/md'
import './CurrentClients.css'
const CurrentClients = () => {
  return (
    <div className='currentclientscontainer'>
    <header>CURRENT CLIENTS</header>
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
        <th>FIRST NAME</th>
        <th>LAST NAME</th>
        <th>EMAIL</th>
        <th>ENROLLMENT</th>
        <th>HOUSES</th>
        
      </thead>
      <tbody>
        <tr>
          <td>1C</td>
          <td>JOHN</td> 
          <td>OLOO</td> 
          <td>oloo15@gmail.com</td>
          <td>15/3/2000</td>
          <td>3</td>
          
        </tr>  
        <tr>
          <td>1C</td>
          <td>JOHN</td> 
          <td>OLOO</td> 
          <td>oloo15@gmail.com</td>
          <td>15/3/2000</td>
          <td>3</td>
          
        </tr> 
        <tr>
          <td>1C</td>
          <td>JOHN</td> 
          <td>OLOO</td> 
          <td>oloo15@gmail.com</td>
          <td>15/3/2000</td>
          <td>3</td>
          
        </tr> 
        <tr>
          <td>1C</td>
          <td>JOHN</td> 
          <td>OLOO</td> 
          <td>oloo15@gmail.com</td>
          <td>15/3/2000</td>
          <td>3</td>
          
        </tr> 
        <tr>
          <td>1C</td>
          <td>JOHN</td> 
          <td>OLOO</td> 
          <td>oloo15@gmail.com</td>
          <td>15/3/2000</td>
          <td>3</td>
          
        </tr> 
        <tr>
          <td>1C</td>
          <td>JOHN</td> 
          <td>OLOO</td> 
          <td>oloo15@gmail.com</td>
          <td>15/3/2000</td>
          <td>3</td>
          
        </tr> 
         <tr>
          <td>1C</td>
          <td>JOHN</td> 
          <td>OLOO</td> 
          <td>oloo15@gmail.com</td>
          <td>15/3/2000</td>
          <td>3</td>
          
        </tr> 
        <tr>
          <td>1C</td>
          <td>JOHN</td> 
          <td>OLOO</td> 
          <td>oloo15@gmail.com</td>
          <td>15/3/2000</td>
          <td>3</td>
          
        </tr> 
       
  
      </tbody>
    </table>
  </div>
  )
}

export default CurrentClients