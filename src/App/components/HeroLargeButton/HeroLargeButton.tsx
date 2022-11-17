import React from "react";
import roverIcon from "../../../assets/images/rover/mars-rover.png";

const HeroLargeButton = (props: IHeroLargeButtonProps) => (
  <button className="btn bg-light w-100">
    <img src={roverIcon} alt="🤖" />
    <span className="mx-3"> {props.name}</span>
  </button>
);

export default HeroLargeButton;

export interface IHeroLargeButtonProps {
  name: string;
}
