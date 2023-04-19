import React, { useEffect, useState } from "react";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import L from "leaflet";
import { Tooltip } from "../../../components/sharedComponents";

const SportFacilityBox = ({sportFacility, location, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [distance, setDistance] = useState(-1);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const userLocation = L.latLng(location?.latitude, location?.longitude);
    const sportFacilityLocation = L.latLng(
      sportFacility?.latitude,
      sportFacility?.longitude
    );

    if (location !== null) {
      const distanceInMeters = userLocation.distanceTo(sportFacilityLocation);
      const distanceInKilometers = distanceInMeters / 1000;
      setDistance(distanceInKilometers);
    }
  }, [location]);

  const handleClick = (e) => {
    e.stopPropagation();
    setIsClicked(!isClicked);
  };

  return (
    <div
      className="relative flex flex-col gap-1 cursor-pointer"
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
      <div className="flex flex-col gap-px">
        <div className="flex justify-between">
          <span className="font-semibold">{`${sportFacility.address}, ${sportFacility.city}`}</span>
          {distance >= 0 ? (
            <span>{distance.toFixed(2)} km</span>
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
      <div onClick={handleClick}>
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
      </div>
    </div>
  );
};

export default SportFacilityBox;
