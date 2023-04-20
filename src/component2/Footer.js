import "./Footerstyles.css";
import React from 'react'
import {FaHome,FaPhone,FaMailBulk, FaLinkedin,FaFacebook,FaTwitter} from "react-icons/fa";
function Footer() {
  return (
    <div className="Footer">
      <div className="FooterContent">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"white",marginright:"2rem"}}/>
                <div>
                    <p>123 Housing society</p>
                    <p>Naihati</p>
                </div>
            </div>
            <div className="phone">
       <h4> <FaPhone size={20} style={{color:"white",marginright:"2rem"}}/>9330309476</h4>
            </div>
            <div className="email">
       <h4> <FaMailBulk size={20} style={{color:"white",marginright:"2rem"}}/>sujitrungta9830@gmail.com</h4>
            </div>
        </div>
            <div className="right">
                <h4>About Me.</h4>
                <p>Hi I am Sujit Rungta,student of 3rd year pursuing Bachelors degree of Technology in Computer Science and Business System.</p>
                <div className="social">
                
       <FaFacebook size={30} style={{color:"white",marginright:"2rem",padding:"4px"}}/>
       <FaTwitter size={30} style={{color:"white",marginright:"2rem",padding:"4px"}}/>
       <FaLinkedin size={30} style={{color:"white",marginright:"2rem",padding:"4px"}}/>
                </div>
            </div>
        
      </div>
    </div>
  )
}
export default Footer;
