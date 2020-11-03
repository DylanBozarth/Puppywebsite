import React from "react";

import useTitle from "../hooks/useTitle";
import Kenburns from "../component/kenburns";
import PuppySeg from "../component/puppyseg";
import Instafeed from "../component/instafeed";

function Home() {
  useTitle("JYMR doodles");

  return (
    <div className="homepagemaster">
      <div className="homebox1">
        <Kenburns />
      </div>
      <div className="paws container-fluid"></div>
      <div className="quote quotetext "><p style={{color: "black"}}>"A dog is the only thing on earth that loves you more than you love yourself."</p> </div>
      <div className="homebox2">
        <PuppySeg />
      </div>
      <div className="homebox3">
        <Instafeed />
      </div>
    </div>
  );
}
export default Home;
