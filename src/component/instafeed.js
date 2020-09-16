import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { IconContext } from "react-icons";

import { NavLink } from "react-router-dom";

function Instafeed() {
    return(
        <div>
<div className="seemorepuppies">
  <NavLink to="/application" className="nohighlight">
          <h1 className="puppytitle">
           Get your own puppy <br />
           <IconContext.Provider
      value={{ color: 'black', size: '50px', className: "arrows"}}
    ><MdKeyboardArrowRight  /> <MdKeyboardArrowRight /> <MdKeyboardArrowRight /></IconContext.Provider>
          </h1>
        </NavLink></div>
        <div className="instagrambox">
          {" "}
          <div className="cover puppytitle">
            <h1>Follow us on Social Media </h1>
          </div>
          <div className="elfsight-app-343de7b1-10c9-4569-80a1-2e487a1d8b07 instafeed"></div>
          
        </div>
      </div>  
    )
}
export default Instafeed