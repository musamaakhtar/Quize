import React from "react";
import Fimg from "../image/Ellipse 265.png";
import Simg from "../image/Ellipse 264.png";
// import Timg from "../image/Ellipse 263.jpg";
// import FFimg from "../image/Ellipse 262.png";
import dot from "../image/Ellipse 266.png";
import man from "../image/12d 1.png";
export default function HeroSection() {
  return (
    <>
      <div id="mainHero">
        <div id="mainone" className="d-flex">
          <div id="hfirst" className="col-12 col-md-6">
            <h1>
              Make a Quiz to
              <br /> Generate <br /> Knowledge of your <br />
              life
            </h1>
            <p>
              Make learning for fun your students, trainess,
              <br />
              and attendees with a modern take on quizzes.
            </p>
            <button>Get Started</button>
          </div>

          <div id="hsec" className="col-6">
            <img
              src={Fimg}
              className="h-100 w-100 imga"
              alt="nothing to show"
            />
            <img src={Simg} className=" imgb" alt="nothing to show" />
            {/* <img src={FFimg} className="imgd" alt="nothing to show" /> */}
            <img src={dot} className="dot" alt="nothing to show" />
            <div className="mainImg">
              <img src={man} className="man" alt="nothing to show" />
            </div>
            {/* <img src={Timg} className="imgc" alt="nothing to show" /> */}
          </div>
        </div>
      </div>
    </>
  );
}
