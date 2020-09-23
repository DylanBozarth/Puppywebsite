import React from 'react';
import {
 
  NavLink
  
} from "reactstrap";

function Instafeed() {
    return(
        <div>
<div className="cloud">
  <NavLink href="/application" className="nohighlight">
          <img src="./assets/cloud.png" alt="puppycloud" className="puppycloud img-fluid"  ></img>
          
         
        </NavLink></div>
        <div className="instagrambox">
          {" "}
          <div className="cover container-fluid">
          <NavLink href="https://www.instagram.com/jymr_doodles/" className="nohighlight">
           <img className="img-fluid" src="./assets/instagramlogo.png"></img>
           </NavLink>
          </div>
          <div className="elfsight-app-343de7b1-10c9-4569-80a1-2e487a1d8b07 instafeed"></div>
          
        </div>
      </div>  
    )
}
export default Instafeed