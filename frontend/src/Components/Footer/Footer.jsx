import React from 'react'
import './Footer.css'
import { IoMdCall } from "react-icons/io";
import { MdAttachEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { HiBuildingOffice } from "react-icons/hi2";
import { SiApacheopenoffice } from "react-icons/si";
import map from '../../assets/map.jpg'
const Footer = () => {
  return (
    <div className='footerContainer'>
        <section className="details">
            <div className="contacts">
                <header>COMMUNICATE WITH US VIA</header>
                <span>
                    <IoMdCall /> CALL
                </span>
                <span>
                <MdAttachEmail /> EMAIL
                </span>
                <span>
                <FaTwitter /> TWITTER
                </span>
                <span>
                <FaLinkedin /> LINKEDIN

                </span>
            </div>
            <div className="offices">
                <header>VISIT OUR OFFICES</header>
                <span>
                <HiBuildingOffice />
                <h3>HEAD OFFICE</h3>
                <h4>NAIROBI</h4>
                </span>
                <span>
                <SiApacheopenoffice />
                <h3>BRANCH</h3>
                <h4>NAKURU</h4>
                </span>
            </div>
        </section>
        <section className="map">
            <img src={map} alt="" />
        </section>
    </div>
  )
}

export default Footer