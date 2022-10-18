import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <section className="grid-container">

        <div className="umbrellas" >
          <button className="btn-umbrellas" >SHOP</button>
        </div> 
        <div className="miniumbrella">Pufi RAIN</div>
        <div className="puf"> Pufi PUFF
          <h2>Description of product. This text is simulation</h2>
        </div>
        <div className="cat"></div>
        <div className="bolsas"></div>
        <div className="bag">Pufi CART</div>
        <div className="napa">Pufi NAP</div>
        <div className="cute"></div>
      
      </section>
    </>
  );
}

export default Home;
