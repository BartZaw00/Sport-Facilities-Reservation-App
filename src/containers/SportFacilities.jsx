import React from "react";
import { SportFacilityBox } from "../components";

import { sportFacilitiesData } from "../utils/data.js";

const SportFacilities = () => {
  return (
    <div className="px-20 md:px-4 flex flex-wrap gap-5">
      {sportFacilitiesData.map((item) =>
        item.facilities.map((facility) => (
          <SportFacilityBox key={facility.id} sportFacility={facility} />
        ))
      )}
    </div>
  );
};

export default SportFacilities;
