import React from 'react'
import './Stats.css'
import { MdDataExploration, MdFreeCancellation, MdSensorOccupied, MdStayCurrentPortrait } from 'react-icons/md'

const Stats = () => {
  return (
    <div className='statscontainer'>
        <section>
            <span>
                <h2>0</h2>
                <MdStayCurrentPortrait/>
            </span>
            <h4>CURRENT USERS</h4>
        </section>
        <section>
            <span>
                <h2>0</h2>
                <MdDataExploration/>
            </span>
            <h4>PAST USERS</h4>
        </section>
        <section>
            <span>
                <h2>0</h2>
                <MdSensorOccupied/>
            </span>
            <h4>OCCUPIED ROOMS</h4>
        </section>
        <section>
            <span>
                <h2>0</h2>
                <MdFreeCancellation/>
            </span>
            <h4>FREE ROOMS</h4>
        </section>
    </div>
  )
}

export default Stats