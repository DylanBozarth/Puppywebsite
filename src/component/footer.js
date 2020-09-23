import React from "react";
import {
    
    NavLink
    
  } from 'reactstrap';
  import { FaFacebook, FaInstagram } from "react-icons/fa";
export const Footer = () => (
    <footer className="site-footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <h6 className="center">Great Doodles from great Hoomans</h6>
          <div className="container-fluid col">
          <img className="footerlogo img-fluid" alt="footerlogo" src="./assets/logosquare.png" width="480px" height="200px"></img>
          <ul className="social-icons">
            <li><a className="facebook" target="_blank"  rel="noopener noreferrer" href="https://www.facebook.com/JYMRdoodles/"><FaFacebook size={30} /></a></li>
            <li><a className="dribbble" target="_blank"  rel="noopener noreferrer" href="https://www.instagram.com/jymr_doodles/"><FaInstagram size={30} /></a></li>
            
          </ul>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
          
        </div>
        </div>

        

        <div className="col-xs-6 col-md-3">
          <h6  className="center">Quick Links</h6>
          <ul className="footer-links">
            <li><NavLink href="/puppies" className="footerlink">All Puppies</NavLink></li>
            <li><NavLink href="/goldendoodles" className="footerlink">Goldendoodles</NavLink></li>
            <li><NavLink href="/Poodles" className="footerlink">Poodles</NavLink></li>
            <li><NavLink href="/Labradoodles" className="footerlink">Labradoodles</NavLink></li>
            <li><NavLink href="/application" className="footerlink">Adoption Application</NavLink></li>
          </ul>
        </div>
      </div>
      
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-6 col-xs-12">
          <p className="copyright-text" style={{textAlign: "right"}}>Copyright &copy; 2020 All Rights Reserved by 
       JYMR doodles
          </p>
        </div>

        
      </div>
    </div>
    </div>
</footer>
);
