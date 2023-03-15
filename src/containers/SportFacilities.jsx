import React from "react";
import { SportFacilityBox } from "../components";

import { sportFacilitiesData } from "../utils/data.js";

const SportFacilities = () => {
  return (
    <div className="px-20 2xl:px-10 xl:px-8 lg:px-6 md:px-4 grid grid-cols-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-x-6 gap-y-8">
      {sportFacilitiesData.map((item) =>
        item.facilities.map((facility) => (
          <SportFacilityBox key={facility.id} sportFacility={facility} />
        ))
      )}
    </div>
  );
};

export default SportFacilities;
