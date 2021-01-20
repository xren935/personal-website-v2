import React, { useState } from "react";
import styles from "../static/css/main.css";

function Compo1({ src }) {
  let imgStyles = {
    paddingLeft: "80px",
    width: "auto",
    height: 90 + "%",
    position: "cover"
  };
  let textStyles = {
    font: 5 + "px",
    color: "white",
    textAlign: "left",
    padding: "0px"
  };
  return (
    <div class="compo1" style={imgStyles}>
      <img src={src} alt="slide-img" style={imgStyles} />
      <p style={textStyles}>(IB English Literature Higher Level)</p>
      <a href="https://docs.google.com/document/d/1qwtsV1RW53R8roNWFiu8aP7pCzSzB0PVKiarFbdkiEA/edit?usp=sharing">
        Discussion Outline
      </a>
      <a href="https://docs.google.com/document/d/1w5EAbaSmw5Eu3SCFpOpu465xHKuBod0t_ntUSTZ14kA/edit?usp=sharing">
        Quotes Table
      </a>
    </div>
  );
}

export default Compo1;
