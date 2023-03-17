import React from "react";

const DistanceFilter = ({ distance, handleDistanceChange }) => {
  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="distance" className="text-my-gray">
        Odległość
      </label>
      <div className="flex items-center gap-4">
        <input
          type="range"
          id="distance"
          min="5"
          max="50"
          step="1"
          value={distance}
          onChange={handleDistanceChange}
          className="flex-1 h-1 appearance-none bg-gray-300 rounded-sm focus:outline-none"
        />
        <span className="text-my-gray">{distance} km</span>
      </div>
    </div>
  );
};

export default DistanceFilter;
