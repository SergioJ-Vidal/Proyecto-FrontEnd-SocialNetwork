import React from 'react'
import logo from "../../assets/images/fb-logo.png"
import logoinsta from "../../assets/images/insta-logo.png"
import logotwitter from "../../assets/images/twitter-logo.png"
import logolinke from "../../assets/images/linke-logo.png"
import "./Footer.css"


const Footer = () => {
  return (
    <div className='footer'>

      <div className='footer-info'>
      <span>Legal</span>
      <span>Privacity</span>
      <span>Cookies</span>
      <span>Contact</span>
      </div>

      <div id="social-media">
                <a href="http://www.facebook.com" rel="noopener noreferrer" title="facebook" target="_blank">
                    <img src={logo} className="social-logo" alt="facebook"></img></a>
                <a href="http://instagram.com" rel="noopener noreferrer" title="instagram" target="_blank">
                    <img src={logoinsta} className="social-logo" alt="instagram"></img></a>
                <a href="http://www.twitter.com" rel="noopener noreferrer" title="twitter" target="_blank">
                    <img src={logotwitter} className="social-logo" alt="twitter"></img></a>
                <a href="http://www.linkedin.com" rel="noopener noreferrer" title="linkedin" target="_blank">
                    <img src={logolinke} className="social-logo" alt="linkedin"></img></a>
            </div>
    </div>
    
    
  )
}

export default Footer