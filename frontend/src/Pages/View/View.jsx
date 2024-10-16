import React from 'react'
import './View.css'
import house from '../../assets/house.jpg'
import { MdEmail } from 'react-icons/md'
import { FaBookmark, FaEdit } from 'react-icons/fa'

const View = () => {
  return (
    <div className='viewcontainer'>
        <section>
            <img src={house} alt="" />     
            <header>3 BEDROOM BUNGALOW</header>
            <span className='descriptionsection'>
                <label htmlFor="">DESCRIPTION</label>
               <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste itaque placeat voluptatum doloribus fugit eaque impedit ipsam nemo earum beatae similique pariatur, voluptatibus dolorum corrupti, ad eius debitis eos odio accusamus! Accusantium, nemo pariatur praesentium eum adipisci corporis. Commodi dolores, dolorum sapiente nam voluptatem quis optio aliquam, aut quibusdam nihil maiores magni rem animi! Eius, facilis explicabo mollitia iusto quas nihil culpa quam voluptate reiciendis ratione quos quaerat cumque tenetur voluptatem nulla maxime beatae assumenda consequatur praesentium minima quis veniam nobis magnam. Dolores suscipit quas dolorum labore, non assumenda, molestias quibusdam soluta quasi possimus cumque? Reiciendis explicabo quod placeat atque. Culpa veritatis consectetur harum neque accusantium eligendi! Quae commodi esse maiores repellendus neque consequatur quis praesentium excepturi. Culpa perspiciatis quia rem sequi ex provident soluta animi neque aliquam, nam quasi consequatur doloremque minima sed dolore fuga veniam similique magnam. Consectetur aliquam officiis voluptas provident eveniet voluptatibus hic velit maiores pariatur.
                </h4>
            </span>
            <ul>
                <label htmlFor="">INFORMATION</label>
                <li><h3>PRICE</h3> ----  <h4>$ 48000</h4></li>
                <li><h3>AVAILABLE UNITS</h3>---- <h4>48</h4></li>
                <li><h3>NUMBER OF ROOMS</h3>----<h4>4</h4></li>
                <li><h3>TYPE OF POSTING</h3> ---- <h4>RENTAL</h4></li>
            </ul>
          
            <div>
                <img src={house} alt="" />
                <img src={house} alt="" />
                <img src={house} alt="" />
                <img src={house} alt="" />
                <img src={house} alt="" />
            </div>
            <div className='actionbuttons'>
                <FaEdit/>
                <MdEmail/>
                <FaBookmark/>
            </div>
        </section>
    </div>
  )
}

export default View