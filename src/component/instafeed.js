import React from 'react';

import { NavLink } from "react-router-dom";

function Instafeed() {
    return(
        <div>
<div className="cloud">
  <NavLink to="/application" className="nohighlight">
          <img src="./assets/cloud.png" alt="puppycloud" className="puppycloud" height="200px" ></img>
          
         
        </NavLink></div>
        <div className="instagrambox">
          {" "}
          <div className="cover puppytitle">
            <h1 className="puppytitle">Follow us on Social Media </h1>
          </div>
          <div className="elfsight-app-343de7b1-10c9-4569-80a1-2e487a1d8b07 instafeed"></div>
          
        </div>
      </div>  
    )
}
export default Instafeed