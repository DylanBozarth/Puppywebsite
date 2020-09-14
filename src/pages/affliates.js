import React from "react";

import useTitle from "../hooks/useTitle";

function Affliates() {
  useTitle("JYMR Doodles");
  return (
    <div className="container-fluid page">
      <h1 className="puppytitle">Our Affliates</h1>
      <div className="row">
      <div className="col-sm-4"><div className="Affliates">
          <h3>Info dump </h3>
          <p>
            The Poodle is a dog breed that comes in three varieties: Standard
            Poodle, Miniature Poodle, and Toy Poodle. The origin of the breed is
            still discussed, with a prominent dispute over whether the poodle
            descends from Germany as a type of water dog, or from the French
            Barbet.[5]
          </p> </div>
          <img
            className=""
            height="300px"
            width="280px"
            src="./puppies/shiba.jpg"
            alt="poodle"
          />
        </div>
        <div className="col-sm-4">
         <div className="Affliates"> <h3>Labradoodles</h3>
          <p>
            A Labradoodle (/ˈlæbrəduːdəl/) is a crossbreed dog created by
            crossing the Labrador Retriever and the Standard, Miniature, or Toy
            poodle. The term first appeared in 1955, but was not initially
            popular. Labradoodles are sometimes good choice for those with
            canine dander allergies, as they are capable of possessing the same
            hypoallerginc coat as their poodle ancestors, assuming that the have
            been produced by a breeder well versed in genetic testing and
            selective breeding.
          </p></div>
          <img
            className=""
            height="300px"
            width="280px"
            src="./puppies/shiba.jpg"
            alt="Labradoodle"
          />
        </div>
        <div className="col-sm-4">
        <div className="Affliates"><h3>GoldenDoodle </h3>
          <p>
            A Goldendoodle is a dog crossbreed bred from a Golden Retriever and
            a Poodle, their name is a portmanteau of Golden Retriever and
            Labradoodle.[1][2] Whilst primarily bred as companion dogs,
            Goldendoodles have been successfully trained as therapy dogs, guide
            dogs[2] and other forms of assistance dogs.[3]
          </p></div>
          <img
            className=""
            height="300px"
            width="280px"
            src="./puppies/shiba.jpg"
            alt="Goldendoodle"
          />
        </div>
      </div>
    </div>
  );
}
export default Affliates;