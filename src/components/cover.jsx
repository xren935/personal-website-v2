import React from "react";

class Cover extends React.Component {
  render() {
    const date = new Date();
    const currentTime = date.getHours();
    let greeting;
    if (currentTime < 12) {
      greeting = "Hello and good morning!";
    } else if (currentTime < 18) {
      greeting = "Hello and good afternoon!";
    } else {
      greeting = "Hello and good evening!";
    }
    return (
      <div className="cover">
        <h3>{greeting}</h3>
        <h1>I'm Annie Ren</h1>
        <hr />
        <h2>I look up at the ⭐s and keep my feet on the ground.</h2>
      </div>
    );
  }
}

export default Cover;
