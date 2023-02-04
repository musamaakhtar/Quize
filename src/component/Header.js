// import { Button } from 'bootstrap'
import React from "react";

export default function Header() {
  return (
<>
<div id="one" className="hmain d-block container d-md-flex">
      <div className="d-flex col-8 col-md-6">
        <h1 id="two">
          Quizes
        </h1>
        <ul className="d-flex list-unstyled header_ul">
          <li>Play</li>
          <li>Create</li>
          <li>Search</li>
        </ul>
      </div>

      <div className="d-flex col-7 col-md-6 sign">
        <button id="three" className="ml-5">
          Sign In
        </button>
        <button id="four">Sign Up </button>
      </div>
    </div>  
    </>
  );
}
