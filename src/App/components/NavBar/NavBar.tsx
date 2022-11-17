import React from "react";
import { ROVERS } from "../../const/rovers";

const NavBar = () => {
  const roverItems: JSX.Element[] = ROVERS.map((rover) => (
    <a key={rover} href={`/rovers/${rover}`} className="btn text-white text-capitalize">
      {rover}
    </a>
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
