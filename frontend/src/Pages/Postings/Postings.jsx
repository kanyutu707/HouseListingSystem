import React from 'react'
import house from '../../assets/house.jpg'
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import { MdArrowCircleRight, MdDelete } from "react-icons/md";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import './Postings.css'

const Postings = () => {
  return (
    <div className='postingscontainer'>
    <header>MY POSTINGS</header>
    <div className="controls">
    <IoIosArrowDropleftCircle />
  <IoMdArrowDropleft />
  <input type="search" placeholder='INPUT SEARCH ITEM'/>
  <span>1/25</span>
  <IoMdArrowDroprightCircle />

  <MdArrowCircleRight />
    </div>
    <section>
        <span className='container'>
            <img src={house} alt="" />
            <span className="details">
                <h2>5 in 5 rooms</h2>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cumque! Illo distinctio id quidem veniam eaque voluptate. Aliquid, suscipit eius quae veniam dolor provident iste, eveniet, velit nesciunt dolorem delectus.</h4>
            </span>
           <MdDelete/>
            <button>VIEW</button>
        </span>
        <span className='container'>
            <img src={house} alt="" />
            <span className="details">
                <h2>5 in 5 rooms</h2>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cumque! Illo distinctio id quidem veniam eaque voluptate. Aliquid, suscipit eius quae veniam dolor provident iste, eveniet, velit nesciunt dolorem delectus.</h4>
            </span>
            <MdDelete/>
            <button>VIEW</button>
        </span>
        
    </section>
</div>
  )
}

export default Postings