import React from "react";

import useTitle from "../hooks/useTitle";
import _ from "lodash";
import Kenburns from "../component/kenburns";
import PuppySeg from "../component/puppyseg";
import Instafeed from "../component/instafeed";

function Home({ propdata }) {
  useTitle("JYMR doodles");

  return (
    <div className="homepagemaster">
      <div className="homebox1">
        <Kenburns />
      </div>
      <div className="paws"></div>
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
