import React from "react";
import { BsMap } from "react-icons/bs";

const MapButton = () => {
  return (
    <div className="fixed left-2/4 bottom-24 -translate-x-2/4 bg-my-primary-text flex items-center gap-5 px-5 py-4 rounded-full cursor-pointer duration-200 hover:-translate-y-2 hover:scale-105">
      <span className="text-white font-bold">Mapa</span>
      <BsMap color="white"/>
    </div>
  );
};

export default MapButton;
