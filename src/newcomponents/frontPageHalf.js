import React from 'react'
import PuppySeg from '../component/puppyseg'

export const FrontpageHalf = () => {
    return(
        <div>
             <div className="text-center nav-bar-logo">
              {" "}
              <img
                src="./assets/headerlogo.png"
                width="190px"
                height="190px"
                className="img-fluid"
                alt="doodle logo"
              ></img>
              <br />
              <p>"A dog is the only thing on earth that can love you more than you love yourself"</p>
            </div>
        </div>
    )
}