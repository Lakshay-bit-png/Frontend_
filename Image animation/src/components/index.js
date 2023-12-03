import React from "react";
import index from "./index.css";
import a1 from "../assets/a1.jpeg";
import a2 from "../assets/a2.jpeg";
import a3 from "../assets/a3.avif";

export const Animations = () => {
  return (
    <>
      <div className="animation-head">
        <span>Animations</span>
      </div>
      <div className="flex-col">
        <div className="img-div div-1">
          <img className="img-1" src={a1} />
        </div>
        <div className="img-div div2">
          <img className="img-2" src={a2} />
        </div>
        
        <div className="img-div div-3">
          <img className="img-3" src={a3} />
        </div>
      </div>
    </>
  );
};
