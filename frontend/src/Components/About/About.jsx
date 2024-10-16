import React from 'react'
import './About.css'
import house from '../../assets/house.jpg'
const About = () => {
  return (
    <div className='aboutcontainer'>
        <header>ABOUT US</header>
        <div className="about">
            <img src={house} alt="" srcset="" />
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nihil reiciendis vel eius, deserunt aperiam tempora illum nam mollitia sapiente eveniet sed, exercitationem recusandae, sequi quo ex reprehenderit maiores excepturi placeat consectetur iste saepe. Iusto, voluptatibus. Necessitatibus iste labore, ducimus laudantium laborum incidunt optio ut aperiam cum amet id quas perspiciatis rerum dicta praesentium ipsam corrupti modi numquam dolores obcaecati? Accusantium tempora laboriosam porro corporis beatae quasi fuga excepturi distinctio?
            </span>
        </div>
    </div>
  )
}

export default About