import "./heroimage.css";
import React from "react";

import {Link} from "react-router-dom";

function Heroimage() {
  return (
    <div className="hero">
        <div className="mask">
            <img src=" " alt="" className="introimg" />
        </div>
      
      <div className="content">
        <p>Hi,I am Sujit Rungta
        </p>
        <h1>React Developer</h1>
        <div>
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btnlite">Contact</Link>
        </div>
      </div>
    </div>
  );
}
export default Heroimage;