import React from "react";
import { NavLink } from "react-router-dom";
import { ROVERS } from "../../const/rovers";

const NavBar = () => {
  const roverItems: JSX.Element[] = ROVERS.map((rover) => (
    <NavLink
      key={rover}
      to={`/rovers/${rover}`}
      className="btn text-white text-capitalize"
    >
      {rover}
    </NavLink>
  ));
  return (
    <div className="pb-3">
      <a className="btn text-white" href="/">
        Home
      </a>
      {roverItems}
    </div>
  );
};

export default NavBar;
