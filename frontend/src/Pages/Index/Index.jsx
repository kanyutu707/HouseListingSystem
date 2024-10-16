import React from 'react'
import IndexNav from '../../Components/IndexNav/IndexNav'
import Hero from '../../Components/Hero/Hero'
import './Index.css'
import Offer from '../../Components/Offer/Offer'
import About from '../../Components/About/About'
import Testimonials from '../../Components/Testimonials/Testimonials'
import Footer from '../../Components/Footer/Footer'
const Index = () => {
  return (
    <div className='indexContainer'>
        <IndexNav/>
        <Hero/>
        <Offer/>
        <About/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default Index
