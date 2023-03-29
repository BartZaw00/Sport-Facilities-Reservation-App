import React from "react";
import { Navbar, SportFacility } from "../containers";

const SportFacilityPage = () => {
  return (
    <div id="sport-facility-page" className="bg-my-primary-bg">
      <Navbar
        className="h-20 bg-my-primary-bg fixed top-0 w-full grid px-96 2xl:px-60 xl:px-32 lg:px-6 md:px-4 grid-cols-3 sm:grid-cols-2 lg:flex lg:justify-between items-center border-solid border-b-2 border-my-divider z-40"
      />
      <SportFacility />
    </div>
  );
};

export default SportFacilityPage;
