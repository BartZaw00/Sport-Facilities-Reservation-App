import React, { useContext, useState } from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";

import { Image } from "../components";
import { Modal } from "./index";

import { ModalContext } from "../App";

const SportFacilityGallery = ({ images }) => {
  const { setIsModalOpen, setSelectedOption, setSelectedImages } = useContext(ModalContext);

  // Get only the first 5 images from the array
  const slicedImages = images.slice(0, 5);

  const handleClick = (index) => {
    setIsModalOpen(true);
    setSelectedOption("image");
    setSelectedImages(slicedImages[index].photoUrl);
  };


  return (
    <div className="relative grid grid-cols-4 grid-rows-2 gap-2 rounded-xl overflow-hidden sm:grid-cols-none sm:w-full sm:overflow-x-auto sm:gap-x-4">
      {slicedImages.map((image, index) => (
        <Image
          key={image.photoId}
          className={`relative cursor-pointer ${
            index === 0 ? "col-span-2 row-span-2" : ""
          }`}
          src={image.photoUrl}
          onClick={() => handleClick(index)}
        />
      ))}
      <button
        className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-2 bg-slate-200 hover:bg-slate-300 rounded-full"
        onClick={() => {
          setIsModalOpen(true);
          setSelectedOption("images");
          setSelectedImages(images);
        }}
      >
        <span>Zobacz więcej</span>
        <BsGrid3X3GapFill />
      </button>
    </div>
  );
};

export default SportFacilityGallery;
