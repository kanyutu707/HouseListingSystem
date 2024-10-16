import React from 'react'
import './Hero.css'
import house from '../../assets/house.jpg'
import { useNavigate } from 'react-router-dom'


const Hero = () => {
    const navigate=useNavigate();

    const moveToSignIn=()=>{
        navigate('/signin');
    }
  return (
    <div className='heroContainer'>
        <span>
            <h1>JOIN US</h1>
            <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ad illo alias culpa ipsa et, dolor eos cumque veniam distinctio, hic unde repellat. Blanditiis mollitia porro 
            </h2>
            <button onClick={moveToSignIn}>SIGN IN</button>
            <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, aliquid.
            </h4>
        </span>
        <img src={house} alt="" />
    </div>
  )
}

export default Hero
