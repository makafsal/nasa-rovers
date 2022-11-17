import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { APIKeys, URLs } from "../../const/API";
import { ROVERS } from "../../const/rovers";

const RoverPage = () => {
  const { rover } = useParams();
  const roverFound = ROVERS.find((roverName) => roverName === rover);
  const [roverDetails, setRoverDetails] = useState<[any]>();

  useEffect(() => {
    console.log(`${URLs.rover_manifests}/${rover}?api_key=${APIKeys.NASA}`);
    if (roverFound) {
      fetch(`${URLs.rover_manifests}/${rover}?api_key=${APIKeys.NASA}`)
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  if (!roverFound) {
    return <Navigate to="/err" />;
  }

  return <div>Rover Page: {rover}</div>;
};

export default RoverPage;
