import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">
  <h2>About Me</h2>
  <p>A lot about me is that which is diplayed in the element below.</p>
  <img src={image} alt='I made this'/>
  </div>
  );
}

export default About;
