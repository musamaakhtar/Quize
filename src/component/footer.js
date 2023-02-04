import React from "react";
import { ImFacebook } from "react-icons/im";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import Img from "../image/app.png";
import Img2 from "../image/google (1).png";
export default function Footer() {
  return (
    <>
      <div className="container-fluid   foot border-primary text-white">
        <div className="row">
          <div className="col-12 d-sm-flex d-md-block col-md-5   foot_first">
            <div className="mt">
              <h1>Quizes</h1>
              <p>Meet your favorite celebrites and creatives</p>
            </div>
            <div className="footer_icon">
              <h1>Follow Us</h1>
              <ul>
                <li className="listf">
                  <ImFacebook />
                </li>
                <li>
                  <AiOutlineTwitter />
                </li>
                <li>
                  <AiFillInstagram />
                </li>
                <li>
                  <AiFillYoutube />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6 col-md-2   foot_sec mt-4">
            <h1>About</h1>
            <p className="mt-4">Contact Us</p>
            <p>Privacy Policy</p>
            <p>Term of Use</p>
          </div>
          <div className="col-6 col-md-5 quickl   mt-4">
            <h1>Quickly Download</h1>
            <div className="last">
              <img src={Img2} alt="Google" />
              <img src={Img} alt="App Store" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer_last">
        <p>© 2022 All Rights Reserved</p>
      </div>
    </>
  );
}
