import React from "react";
import "./Hero.css";
import roverIcon from "../../../assets/images/rover/mars-rover.png";

const Hero = () => (
  <>
    <video autoPlay muted loop id="heroVideo">
      <source
        src="https://images-assets.nasa.gov/video/MarsScienceLaboratoryCuriosityRoverAnimation/MarsScienceLaboratoryCuriosityRoverAnimation~orig.mp4#t=6,670"
        type="video/mp4"
      />
      Your browser does not support HTML5 video.
    </video>
    <div className="video-overlay"></div>
    <div className="hero vh-100">
      <div className="container position-relative">
        <div className="row text-center pt-5">
          <div className="col">
            <h1 className="hero-title text-white">NASA ROVERS</h1>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col col-lg3">
            <button className="btn bg-light">
              <img src={roverIcon} alt="🤖" />
              <span className="mx-3"> PERSEVERANCE</span>
            </button>
          </div>
          <div className="col col-lg3">
            <button className="btn bg-light">
              <img src={roverIcon} alt="🤖" />
              <span className="mx-3"> CURIOSITY</span>
            </button>
          </div>
          <div className="col col-lg3">
            <button className="btn bg-light">
              <img src={roverIcon} alt="🤖" />
              <span className="mx-3"> SPIRIT</span>
            </button>
          </div>
          <div className="col col-lg3">
            <button className="btn bg-light">
              <img src={roverIcon} alt="🤖" />
              <span className="mx-3"> OPPORTUNITY</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Hero;
