import React, { useState } from "react";
import styles from "../static/css/main.css";

function Compo7({ src }) {
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
    <div class="compo7" style={imgStyles}>
      <img src={src} alt="slide-img" style={imgStyles} />
      <p style={textStyles}>
        "To what extent can access to information create bias and limit one’s
        ability to acknowledge other viewpoints?"
      </p>
      <a href="https://docs.google.com/document/d/1gTUgvNlxVJSwglxm5q32_PiNC1qA5NmT_s7xRVnTn7g/edit?usp=sharing">
        My 3980-word research essay
      </a>
    </div>
  );
}

export default Compo7;
