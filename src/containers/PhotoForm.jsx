import React from "react";

const PhotoForm = ({ images }) => {

  return (
    <>
      {typeof images === "string" ? (
        <img className="m-auto" src={images} alt="Sport Facility Photo" />
      ) : (
        images.map((image) => (
          <img
            key={image.photoId}
            className="mb-4 m-auto"
            src={image.photoUrl}
            alt="Sport Facility Photo"
          />
        ))
      )}
    </>
  );
};

export default PhotoForm;
