import React from "react";
import { BsMap } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";

const MapOpenButton = ({ handleMapButtonClick, showMap }) => {
  return (
    <div
      className="fixed left-2/4 bottom-24 -translate-x-2/4 md:bottom-12 bg-my-primary-text px-5 py-4 rounded-full cursor-pointer duration-200 hover:-translate-y-2 hover:scale-105"
      onClick={handleMapButtonClick}
    >
      {showMap ? (
        <div className="flex items-center gap-5">
          <span className="text-white font-bold">Lista</span>
          <FaListUl color="white" />
        </div>
      ) : (
        <div className="flex items-center gap-5">
          <span className="text-white font-bold">Mapa</span>
          <BsMap color="white" />
        </div>
      )}
    </div>
  );
};

export default MapOpenButton;
