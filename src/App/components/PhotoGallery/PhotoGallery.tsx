import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { APIKeys, URLs } from "../../const/API";
import Filters from "./Filters/Filters";
import "./PhotoGallery.css";

const PhotoGallery = (props: IPhotoGalleryProps) => {
  const [sol, setSol] = useState<Number>(1);
  const [photos, setPhotos] = useState<any>([]);
  const galleryElemRef = useRef(document.createElement("div"));
  const [galleryWidth, setGalleryWidth] = useState(0);

  useMemo(() => {
    if (sol > 0 && sol < props.manifest?.max_sol) {
      fetch(
        `${URLs.photos_base}/${props.manifest?.name}/photos/?sol=${sol}&api_key=${APIKeys.NASA}`
      )
        .then((res) => res.json())
        .then((result) => {
          setPhotos(result["photos"]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [sol, props]);

  useEffect(() => {
    setGalleryWidth(galleryElemRef.current.offsetWidth || 0);
  }, []);

  const photoElements: JSX.Element[] = photos.map((photo: any, index: any) => {
    return (
      <a href={photo.img_src} target="_blank" rel="noreferrer" key={photo.id}>
        <img
          className="photo-tile"
          style={{
            height: "300px",
            width: `${galleryWidth / 5 + 40}px`,
          }}
          src={photo.img_src}
          alt=""
        ></img>
      </a>
    );
  });

  return (
    <div className="px-2">
      <h2>Photos</h2>
      <Filters
        manifest={props.manifest}
        onChangeSolarDay={(sol) => setSol(sol)}
      />
      <div className="photo-gallery mt-3" ref={galleryElemRef}>
        {photoElements}
      </div>
    </div>
  );
};

export default PhotoGallery;

export interface IPhotoGalleryProps {
  manifest: any;
}
