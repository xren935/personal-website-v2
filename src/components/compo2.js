import React, { useState } from "react";
import styles from "../static/css/main.css";

function Compo2({ src }) {
  let imgStyles = {
    paddingLeft: "100px",
    width: "auto",
    height: 90 + "%",
    position: "cover"
  };
  let textStyles = {
    font: 5 + "px",
    color: "white",
    textAlign: "left",
    padding: "0"
  };

  return (
    <div class="compo2" style={imgStyles}>
      <img src={src} alt="slide-img" style={imgStyles} />
      <p style={textStyles}>(IB Physics)</p>
      <a href="https://docs.google.com/document/d/1-_gqF8pawqiYi7ezIrCuvUfs7nG9EyaJLPFXc56wLhY/edit?usp=sharing">
        Investigation of the Motion of a Gravity Car
      </a>
    </div>
  );
}

export default Compo2;
