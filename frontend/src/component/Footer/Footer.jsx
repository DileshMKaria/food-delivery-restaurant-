import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer content left">
        <img src={assets.logo} alt="" />
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptatem sequi pariatur in, incidunt aspernatur esse. Quod enim dolorum saepe possimus obcaecati neque officiis laborum suscipit. Quis architecto veniam voluptates?</p>
            <div className='footer-social-icons'>
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>home</li>
                <li>about</li>
                <li>delivery</li>
                <li>privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>
               Get In Touch
            </h2>
            <ul>
                <li>7208201488</li>
                <li>dileshkaria@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'> Copy right @ tomato app right reseved </p>
    </div>
  )
}

export default Footer
