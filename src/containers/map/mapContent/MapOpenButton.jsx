import React from "react";
import { BsMap } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";

const MapOpenButton = ({ handleMapButtonClick, showMap }) => {
  return (
    <div
      className=" bg-my-primary shadow-lg px-4 py-3 rounded-full cursor-pointer duration-200 hover:-translate-y-1 hover:scale-105"
      onClick={handleMapButtonClick}
    >
      {showMap ? (
        <div className="flex items-center gap-4">
          <span className="text-white font-bold">Lista</span>
          <FaListUl color="white" />
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <span className="text-white font-bold">Mapa</span>
          <BsMap color="white" />
        </div>
      )}
    </div>
  );
};

export default MapOpenButton;
