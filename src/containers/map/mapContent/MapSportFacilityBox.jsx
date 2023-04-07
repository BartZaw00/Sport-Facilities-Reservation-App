import React from 'react'

const MapSportFacilityBox = ({ sportFacility, onClick }) => {
  
    return (
      <div
        className="relative max-w-[250px] flex flex-col gap-1 cursor-pointer bg-white rounded-xl"
        onClick={onClick}
      >
        <div className="relative rounded-xl aspect-[643/611] overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-my-sport-facility-overlay"></div>
          <img
            className="h-full w-full object-cover"
            src={sportFacility.photos[0].photoUrl}
            alt="sport facility"
          />
        </div>
        <div className="flex flex-col gap-px p-1">
          <div className="flex justify-between">
            <span className="font-semibold text-sm">{`${sportFacility.address}, ${sportFacility.city}`}</span>
            <span className="text-sm">{(Math.random() * 4.9 + 0.1).toFixed(1)} km</span>
          </div>
          <span className="font-light text-sm">{sportFacility.type.name}</span>
        </div>
      </div>
    );
  };

export default MapSportFacilityBox