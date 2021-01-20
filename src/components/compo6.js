import React, { useState } from "react";
import styles from "../static/css/main.css";

function Compo6({ src }) {
  let imgStyles = {
    paddingLeft: "50px",
    width: "auto",
    height: 80 + "%",
    position: "cover"
  };
  let textStyles = {
    font: 5 + "px",
    color: "white",
    textAlign: "left",
    paddingLeft: "4px"
  };
  return (
    <div class="compo6" style={imgStyles}>
      <img src={src} alt="slide-img" style={imgStyles} />
      <p style={textStyles}>
        "For any Rubik’s Cube, what is the probability of one side of a cube
        being complete?"
      </p>
      <a
        href="
https://dochub.com/annieren35/6go2gmR/math-ia-pdf?dt=PRrR1ws3WCxvf4meEYGC
"
      >
        My attempt at solving this problem
      </a>
    </div>
  );
}

export default Compo6;
