import React from 'react'
import './Offer.css'
import house from '../../assets/house.jpg'

const Offer = () => {
  return (
    <div className='offerContainer'>
        <header>WHAT WE OFFER</header>
     
        <span className="Offers">
        <span className="card">
                <img src={house} alt="" />
                <div className="cardDetails">
                    <h3>A LARGE POOL OF HOTELS</h3>
                    <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque accusamus autem praesentium ullam officia natus molestiae, eos quisquam, mollitia molestias expedita omnis ad ea reiciendis explicabo sint sunt sapiente commodi?</h4>
                </div>

            </span>
            <span className="card">
                <img src={house} alt="" />
                <div className="cardDetails">
                    <h3>A LARGE POOL OF HOTELS</h3>
                    <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque accusamus autem praesentium ullam officia natus molestiae, eos quisquam, mollitia molestias expedita omnis ad ea reiciendis explicabo sint sunt sapiente commodi?</h4>
                </div>

            </span>
            <span className="card">
                <img src={house} alt="" />
                <div className="cardDetails">
                    <h3>A LARGE POOL OF HOTELS</h3>
                    <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque accusamus autem praesentium ullam officia natus molestiae, eos quisquam, mollitia molestias expedita omnis ad ea reiciendis explicabo sint sunt sapiente commodi?</h4>
                </div>

            </span>
        </span>
       
    </div>
  )
}

export default Offer