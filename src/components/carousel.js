import React, { useState } from "react";
import styles from "../static/css/main.css";
import Compo1 from "./compo1";
import Compo2 from "./compo2";
import Compo3 from "./compo3";
import Compo4 from "./compo4";
import Compo5 from "./compo5";
import Compo6 from "./compo6";
import Compo7 from "./compo7";
import Physics from "../static/img/physics.png"; 
import Pnp from "../static/img/pnp.png"; 
import Cooking from "../static/img/cooking.jpg"; 
import TOK from "../static/img/tok.png"; 
import Fun from "../static/img/fun.jpg"; 
import Perspective from "../static/img/perspective.png"; 
import Cube from "../static/img/cube.png"; 

function Carousel() {
  //function because I want to use hooks
  let carouComponents = [
    <Compo2 src={Physics} />,
    <Compo1 src={Pnp} />,
    <Compo3 src={Cooking} />,
    <Compo4 src={TOK} />,
    <Compo5 src={Fun} />,
    <Compo7 src={Perspective} />,
    <Compo6 src={Cube} />
  ];
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (carouComponents.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    x === -100 * (carouComponents.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div class="carouPage">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="carousel">
              {carouComponents.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="slide"
                    style={{
                      transform: `translateX(${x}%)`
                    }}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
            <button id="goLeft" onClick={goLeft}>
              <i class="fas fa-chevron-left" />
            </button>

            <button id="goRight" onClick={goRight}>
              <i class="fas fa-chevron-right" />
            </button>
          </div>

          <div class="col-lg-6">
            <div class="carousel-font">
              <h1>A carousel of things that I like/would like to share</h1>
              <p> </p>
              <p> And I also like carousels (double entendre intended)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
