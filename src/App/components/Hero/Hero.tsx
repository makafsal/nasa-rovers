import React from "react";
import "./Hero.css";
import HeroLargeButton from "../HeroLargeButton/HeroLargeButton";
import { ROVERS } from "../../const/rovers";
import { HeroConst } from "../../const/hero";

const Hero = () => {
  const roverButtons = ROVERS.map((rover) => (
    <div className="col col-lg3" key={rover}>
      <HeroLargeButton name={rover} />
    </div>
  ));
  return (
    <>
      <video autoPlay muted loop id="heroVideo">
        <source src={HeroConst.VIDEO_URL} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="video-overlay"></div>
      <div className="hero">
        <div className="container position-relative py-5 mt-5">
          <div className="row text-center mt-5 pt-5">
            <div className="col">
              <h1 className="hero-title text-white">NASA ROVERS</h1>
            </div>
          </div>
          <div className="row text-center mt-5 text-white">
            This site provides information on Mars rovers by NASA consumed from
            the NASA rovers API. Also, this site fetches and displays the Mars
            weather from NASA InSight API.
          </div>
          <div className="row mt-5 pt-5">{roverButtons}</div>
        </div>
      </div>
    </>
  );
};

export default Hero;
