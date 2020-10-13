import React from 'react';
import {
 
  NavLink
  
} from "reactstrap";

function Instafeed() {
    return(
        <div>
<div className="cloud container-fluid">
 
        
          {" "}
         
            <div className="row">
              <div className='col-sm-4'>
          <NavLink href="https://www.instagram.com/jymr_doodles/" alt="instagramlogo" className="nohighlight">
           <img className="img-fluid instalogo"   alt="instagram" src="./assets/instagramlogo.png"></img>
           </NavLink>
           </div>
           <div className="col-sm-4">
           <NavLink href="/application" className="nohighlight">
          <img src="./assets/cloud.png" alt="puppycloud" className=" img-fluid"  ></img>
          
         
        </NavLink></div>
              <div className='col-sm-4'>
          <NavLink href="https://www.facebook.com/JYMRdoodles/" alt="instagramlogo" className="nohighlight">
           <img className="img-fluid fblogo"    alt="instagram" src="./assets/facebook.png"></img>
           </NavLink>
           </div>
              
           
          </div>
         
        
      </div>  </div>
    )
}
export default Instafeed