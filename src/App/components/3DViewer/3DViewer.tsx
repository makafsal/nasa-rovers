import React from "react";
import { ROVERS } from "../../const/rovers";

const Viewer3D = (props: IViewer3DProps) => {
  let rover3DElem: JSX.Element;

  switch (props.roverName) {
    case ROVERS[0]:
      rover3DElem = (
        <>
          <iframe
            title={ROVERS[0]}
            src="https://mars.nasa.gov/layout/embed/model/?s=6"
            width="100%"
            height="350"
            scrolling="no"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </>
      );
      break;

    case ROVERS[1]:
      rover3DElem = (
        <>
          <iframe
            title={ROVERS[1]}
            src="https://mars.nasa.gov/gltf_embed/24584"
            width="100%"
            height="350"
            scrolling="no"
            frameBorder="0"
            allowFullScreen
          />
        </>
      );
      break;

    case ROVERS[2]:
    case ROVERS[3]:
      rover3DElem = (
        <>
          <iframe
            title={`${ROVERS[2]} and ${ROVERS[3]}`}
            src="https://mars.nasa.gov/gltf_embed/24883"
            width="100%"
            height="350"
            scrolling="no"
            frameBorder="0"
            allowFullScreen
          />
        </>
      );
      break;

    default:
      rover3DElem = <div>Oops... something went wrong.</div>;
      break;
  }

  return <>{rover3DElem}</>;
};

export default Viewer3D;

export interface IViewer3DProps {
  roverName: string;
}
