import React, { useState } from "react";
import styles from "../static/css/main.css";

function Compo5({ src }) {
  let imgStyles = {
    paddingLeft: "50px",
    width: "auto",
    height: 90 + "%",
    position: "cover"
  };
  let textStyles = {
    font: 5 + "px",
    color: "white",
    textAlign: "left",
    paddingLeft: "3px",
    position: "center"
  };
  return (
    <div class="compo5" style={imgStyles}>
      <img src={src} alt="slide-img" style={imgStyles} />
      <p style={textStyles}>"So, umm...What do you do for fun?"</p>
    </div>
  );
}

export default Compo5;
