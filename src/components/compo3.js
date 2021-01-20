import React, { useState } from "react";
import styles from "../static/css/main.css";
import Cover from "./cover";

function Compo3({ src }) {
  let imgStyles = {
    paddingLeft: "60px",
    width: "auto",
    height: 90 + "%",
    position: "cover"
  };
  let textStyles = {
    font: 5 + "px",
    color: "white",
    textAlign: "left",
    padding: "20px"
  };
  return (
    <div class="compo3" style={imgStyles}>
      <img src={src} alt="slide-img" style={imgStyles} />
      <p style={textStyles}>
        I enjoy cooking, baking, experimenting, eating, and forgetting to take
        pictures of my food
      </p>
    </div>
  );
}

export default Compo3;
