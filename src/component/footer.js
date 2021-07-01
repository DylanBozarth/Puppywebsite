import React from "react";
import {
    
    NavLink
    
  } from 'reactstrap';
  import { FaFacebook, FaInstagram } from "react-icons/fa";
export const Footer = () => (
    <footer className="site-footer">
    <div className="container">
      <div className="row">
        <div className=" col-md-6">
          <h6 className="center">Great Doodles from great Hoomans</h6>
          <div className="container-fluid col">
          <img className="footerlogo img-fluid" alt="footerlogo" src="./assets/logosquare.jpg" width="480px" height="200px"></img>
          <ul className="social-icons">
            <li><a className="facebook" target="_blank"  rel="noopener noreferrer" href="https://www.facebook.com/JYMRdoodles/"><FaFacebook size={30} /></a></li>
            <li><a className="dribbble" target="_blank"  rel="noopener noreferrer" href="https://www.instagram.com/jymr_doodles/"><FaInstagram size={30} /></a></li>
            
          </ul>
          </div>
          
        </div>

        

        <div className="footerlinks col-md-6">
          <h4  className="center ">Quick Links</h4>
          <ul className="footer-links text-center">
            <li><NavLink href="/newpups" className="footerlink">Current litters</NavLink></li>
            <li><NavLink href="/about" className="footerlink">About us</NavLink></li>
            <li><NavLink href="/reviews" className="footerlink">Reviews</NavLink></li>
            <li><NavLink href="/FAQ" className="footerlink">Frequently Asked Questions</NavLink></li>
            <li><NavLink href="/application" className="footerlink">Adoption Application</NavLink></li>
          </ul>
        </div>
      </div>
    
        <div className="text-center">
          <p className="copyright-text text-center" >Copyright &copy; 2020 All Rights Reserved by 
       JYMR doodles
          </p>
      

        
      
    </div>
    </div>
</footer>
);
