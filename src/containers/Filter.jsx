import React, { useState } from "react";

const Filter = () => {
  const [distance, setDistance] = useState(10);

  const handleDistanceChange = (e) => {
    setDistance(parseInt(e.target.value, 10));
  };

  return (
    <div className="flex flex-col gap-5 px-10 pt-6 pb-10">
      <div className="flex flex-col gap-4">
        <label htmlFor="category" className="text-my-gray">
          Kategoria
        </label>
        <select
          id="category"
          className="px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-my-primary"
        >
          <option value="">Wybierz kategorię</option>
          <option value="sport">Sport</option>
          <option value="kultura">Kultura</option>
          <option value="rozrywka">Rozrywka</option>
        </select>
      </div>
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
      <div className="flex flex-col gap-4">
        <label htmlFor="location" className="text-my-gray">
          Lokalizacja
        </label>
        <input
          type="text"
          id="location"
          placeholder="Wprowadź miasto lub kod pocztowy"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-my-primary"
        />
      </div>
      <button className="px-4 py-2 bg-my-primary text-white rounded-md hover:bg-my-primary-hover focus:outline-none">
        Filtruj
      </button>
    </div>
  );
};

export default Filter;
