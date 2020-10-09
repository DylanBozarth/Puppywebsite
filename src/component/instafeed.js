import React from 'react';
import {
 
  NavLink
  
} from "reactstrap";

function Instafeed() {
    return(
        <div>
<div className="cloud container-fluid">
  <NavLink href="/application" className="nohighlight">
          <img src="./assets/cloud.png" alt="puppycloud" className="puppycloud img-fluid"  ></img>
          
         
        </NavLink></div>
        
          {" "}
          <div className="cover container-fluid">
            <div className="row">
              <div className='col'>
          <NavLink href="https://www.instagram.com/jymr_doodles/" alt="instagramlogo" className="nohighlight">
           <img className="img-fluid instalogo"   alt="instagram" src="./assets/instagramlogo.png"></img>
           </NavLink>
           </div>
              <div className='col'>
          <NavLink href="https://www.facebook.com/JYMRdoodles/" alt="instagramlogo" className="nohighlight">
           <img className="img-fluid fblogo"    alt="instagram" src="./assets/facebook.png"></img>
           </NavLink>
           </div>
              
           
          </div>
          </div>
        
      </div>  
    )
}
export default Instafeed