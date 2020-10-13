import React from "react";


import useTitle from "../hooks/useTitle";
import _ from "lodash";

function Parents({ propdata }) {
  const parents = _.get(propdata, "parents", []);
  useTitle("JYMR doodles");
  return (
    <div className="container-fluid innerpage" >
      <div className="puppyseperator"> <h1 className="puppytitle">Goldendoodles</h1></div>
     
      <div className="row">
          {parents.map((parents) => (
            <div className="col-lg-6">
            <div
              className=" parentcard"
              
              key={parents.name}
            >
              <img
                className="homecard frame"
                
                src={parents.image}
                alt={parents.name}
              />
              <h1 className="puppyname">{parents.name}</h1>
              <p className="puppysubtitle">{parents.age}</p>
<a className="puppysubtitle" href={parents.geneticLink}>See my genetic analysis</a>
              
             
            </div>
<p>Puppies from {parents.name}</p>
            <div className="gallery">
   <img src="http://olhar-43.net/conteudo/fotosfofas/cachorrinhos45/6.jpg" />
   <img src="http://fotos.sofotos.org/filhotes-de-cachorros/filhotes-de-cachorro-fofo.jpg" />
   <img src="https://www.blogdocachorro.com.br/wp-content/uploads/11-filhotes-de-cachorros-fofos-010.jpg" />
   <img src="https://cdn3.tudosobrecachorros.com.br/wp-content/uploads/cachorros-fofos-08.jpg" />
   <img src="https://tudosobrecachorro.files.wordpress.com/2014/06/cachorros-fofos-2.jpg?w=625" />
   <img src="http://olhar-43.net/fotinhas/cachorrinho-fofo2.jpg" />
</div>



            </div>
          ))}
          </div>
        </div>
        
    
  );
}
export default Parents;
