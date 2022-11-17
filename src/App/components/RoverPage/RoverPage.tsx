import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { APIKeys, URLs } from "../../const/API";
import { ROVERS } from "../../const/rovers";
import Viewer3D from "../3DViewer/3DViewer";
import DetailBar from "../DetailBar/DetailBar";
import "./RoverPage.css";

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
          setRoverDetails(result["photo_manifest"]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [rover, roverFound]);

  if (!roverFound) {
    return <Navigate to="/err" />;
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col col-lg-3 g-0 detail-bar vh-100">
          <Viewer3D roverName={rover || ""} />
          <DetailBar manifest={roverDetails} />
        </div>
        <div className="col col-lg-9">
          <a href="/">Home</a>
        </div>
      </div>
    </div>
  );
};

export default RoverPage;
