import React from "react";
import {
  NavLink,
} from "reactstrap";
import useTitle from "../hooks/useTitle";
import _ from "lodash";


function Affliates({propdata}) {
  useTitle("JYMR Doodles");
  const affliates = _.get(propdata, "affliates", []);
  const amazon = _.get(propdata, "amazon", []);
  return (
    <div className="container-fluid innerpage">
      <h1 className="puppyname centertext">Our Affliates</h1>
      <div className="row">
      {affliates.map((affliates) => (
           <div className="col-sm-4"  key={affliates.name}> <NavLink href={affliates.link}>
              <img
                className="homecard frame img-fluid"
               
                src={affliates.image}
                alt={affliates.name}
              />
              <h1 className="puppyname">{affliates.name}</h1>

              <p className="puppysubtitle">{affliates.description}</p>
            </NavLink></div>
          ))}
      </div>
      <h1 className="puppyname centertext">Products we reccomend</h1>
      <div className="row">
     
      <iframe marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=testing1230ea-20&marketplace=amazon&region=US&placement=B07H65KP63&asins=B07H65KP63&linkId=8041aaa03480759ab0b276c8719ac462&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066C0&bg_color=FFFFFF">
    </iframe>
      

      </div>
    </div>
  );
}
export default Affliates;
