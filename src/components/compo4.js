import React, { useState } from "react";
import styles from "../static/css/main.css";

function Compo4({ src }) {
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
    <div class="compo4" style={imgStyles}>
      <img src={src} alt="slide-img" style={imgStyles} />
      <p style={textStyles}>
        "Given access to the same facts, how is it possible that there can be
        disagreement between experts in a discipline?"
      </p>
      <a href="https://docs.google.com/document/d/1wojrfj8Xlqnlv60GMk69Ts7AhN5SCLP_K4z5-3N0_14/edit?usp=sharing">
        Theory of Knowledge Essay
      </a>
    </div>
  );
}

export default Compo4;
