import React from "react";
import { SportFacilityBox } from "../components";

import { sportFacilitiesData } from "../utils/data.js";

const SportFacilities = () => {
  return (
    <div className="px-20 md:px-4 grid grid-cols-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-5">
      {sportFacilitiesData.map((item) =>
        item.facilities.map((facility) => (
          <SportFacilityBox key={facility.id} sportFacility={facility} />
        ))
      )}
    </div>
  );
};

export default SportFacilities;
