import React, { useContext, useEffect, useState } from "react";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import L from "leaflet";
import { Tooltip } from "../../../components/sharedComponents";
import useAuth from "../../../hooks/useAuth";
import { ModalContext } from "../../../App";

const SportFacilityBox = ({ sportFacility, distance, onClick }) => {
  const user = useAuth();

  const { setIsModalOpen, setSelectedOption } = useContext(ModalContext);

  const [isClicked, setIsClicked] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setIsClicked(!isClicked);
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
    setSelectedOption("sportFacility");
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    setIsDeleting(true);
  };

  const handleDeleteCancel = (e) => {
    e.stopPropagation();
    setIsDeleting(false);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="relative flex flex-col gap-1 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative rounded-xl aspect-[643/611] overflow-hidden">
        <div className={`absolute top-0 left-0 w-full h-full bg-my-sport-facility-overlay  ${isDeleting ? 'bg-my-sport-facility-overlay-strong' : ''}`}></div>
        <img
          className="h-full w-full object-cover"
          src={sportFacility.photos[0].photoUrl}
          alt="sport facility"
        />
        {user.user && user.user.role === 1 && (
          <div className="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 flex gap-4 mt-6">
            {!isDeleting && (
              <button
                className="text-white font-bold bg-orange-400 shadow-lg px-4 py-2 mb-16 rounded-full cursor-pointer duration-200 hover:-translate-y-2 hover:scale-105"
                onClick={handleEditClick}
              >
                Edytuj
              </button>
            )}
            {isDeleting ? (
              <div className="flex flex-col items-center gap-3 xl:min-h-[80px] -translate-y-8">
                <div className="text-center text-white font-bold sm:text-sm">
                  Czy na pewno chcesz usunąć ten obiekt?
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    className="px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 active:bg-red-800 focus:border-red-800"
                    onClick={handleDelete}
                  >
                    Tak
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-800 focus:border-gray-800"
                    onClick={handleDeleteCancel}
                  >
                    Cofnij
                  </button>
                </div>
              </div>
            ) : (
              <button
                className="text-white font-bold bg-red-600 shadow-lg px-4 py-2 mb-16 rounded-full cursor-pointer duration-200 hover:-translate-y-2 hover:scale-105"
                onClick={handleDeleteClick}
              >
                Usuń
              </button>
            )}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-px">
        <div className="flex justify-between">
          <span className="font-semibold">{`${sportFacility.address}, ${sportFacility.city}`}</span>
          {distance >= 0 ? (
            <span>{distance} km</span>
          ) : (
            <span
              className="relative"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              ??? km
              {showTooltip && (
                <Tooltip text="Włącz lokalizację, aby sprawdzić dystans." />
              )}
            </span>
          )}
        </div>
        <span className="font-light">{sportFacility.type.name}</span>
      </div>
      {/* <div onClick={handleClick}>
        {isClicked ? (
          <BsSuitHeartFill
            size={30}
            color="red"
            className="absolute top-4 right-4 hover:scale-90"
          />
        ) : (
          <BsSuitHeart
            size={30}
            className="absolute top-4 right-4 hover:scale-90"
          />
        )}
      </div> */}
    </div>
  );
};

export default SportFacilityBox;
