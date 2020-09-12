import React from "react";

import Aboutseg from "../component/aboutseg";
import Aboutseg2 from "../component/aboutseg2";
import useTitle from "../hooks/useTitle";

function About() {
  useTitle("Reputable Breeders");
  return (
    <div className="container">
      <Aboutseg />
      <Aboutseg2 />
    </div>
  );
}
export default About;
