import React from "react";
import { useNavigate } from "react-router-dom";
import roverIcon from "../../../assets/images/rover/mars-rover.png";

const HeroLargeButton = (props: IHeroLargeButtonProps) => {
  const navigate = useNavigate();

  return (
    <button
      className="btn bg-light w-100 text-uppercase"
      onClick={() => navigate(`/rovers/${props.name}`)}
    >
      <img src={roverIcon} alt="🤖" />
      <span className="mx-3"> {props.name}</span>
    </button>
  );
};

export default HeroLargeButton;

export interface IHeroLargeButtonProps {
  name: string;
}
