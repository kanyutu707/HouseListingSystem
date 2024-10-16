import React from 'react'
import './PastBookings.css'
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import { MdArrowCircleRight } from "react-icons/md";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import house from '../../assets/house.jpg'

const PastBooking = () => {
  return (
    <div className='pastbookingscontainer'>
    <header>PAST BOOKINGS</header>
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
            <span className="bookings">
                <span className="booking">
                    <h3>FROM</h3>
                    <h4>15/2/2020</h4>
                </span>
                <span className="booking">
                    <h3>TO</h3>
                    <h4>14/5/2020</h4>
                </span>
            </span>
            <button>VIEW</button>
        </span>
        <span className='container'>
            <img src={house} alt="" />
            <span className="details">
                <h2>5 in 5 rooms</h2>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cumque! Illo distinctio id quidem veniam eaque voluptate. Aliquid, suscipit eius quae veniam dolor provident iste, eveniet, velit nesciunt dolorem delectus.</h4>
            </span>
            <span className="bookings">
                <span className="booking">
                    <h3>FROM</h3>
                    <h4>15/2/2020</h4>
                </span>
                <span className="booking">
                    <h3>TO</h3>
                    <h4>14/5/2020</h4>
                </span>
            </span>
            <button>VIEW</button>
        </span>
        <span className='container'>
            <img src={house} alt="" />
            <span className="details">
                <h2>5 in 5 rooms</h2>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cumque! Illo distinctio id quidem veniam eaque voluptate. Aliquid, suscipit eius quae veniam dolor provident iste, eveniet, velit nesciunt dolorem delectus.</h4>
            </span>
            <span className="bookings">
                <span className="booking">
                    <h3>FROM</h3>
                    <h4>15/2/2020</h4>
                </span>
                <span className="booking">
                    <h3>TO</h3>
                    <h4>14/5/2020</h4>
                </span>
            </span>
            <button>VIEW</button>
        </span>
        <span className='container'>
            <img src={house} alt="" />
            <span className="details">
                <h2>5 in 5 rooms</h2>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cumque! Illo distinctio id quidem veniam eaque voluptate. Aliquid, suscipit eius quae veniam dolor provident iste, eveniet, velit nesciunt dolorem delectus.</h4>
            </span>
            <span className="bookings">
                <span className="booking">
                    <h3>FROM</h3>
                    <h4>15/2/2020</h4>
                </span>
                <span className="booking">
                    <h3>TO</h3>
                    <h4>14/5/2020</h4>
                </span>
            </span>
            <button>VIEW</button>
        </span>
        <span className='container'>
            <img src={house} alt="" />
            <span className="details">
                <h2>5 in 5 rooms</h2>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cumque! Illo distinctio id quidem veniam eaque voluptate. Aliquid, suscipit eius quae veniam dolor provident iste, eveniet, velit nesciunt dolorem delectus.</h4>
            </span>
            <span className="bookings">
                <span className="booking">
                    <h3>FROM</h3>
                    <h4>15/2/2020</h4>
                </span>
                <span className="booking">
                    <h3>TO</h3>
                    <h4>14/5/2020</h4>
                </span>
            </span>
            <button>VIEW</button>
        </span>
        
    </section>
</div>
  )
}

export default PastBooking