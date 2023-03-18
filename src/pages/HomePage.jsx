import React, { createContext, useEffect, useState } from "react";

import { MapButton } from "../components";

import {
  Categories,
  Navbar,
  SportFacilities,
  Modal,
} from "../containers/index";

const HomePage = ({ handleModalOpenClick }) => {
  return (
    <div id="home-page" className="bg-my-primary-bg">
      <Navbar
        handleModalOpenClick={handleModalOpenClick}
        className="h-20 bg-my-primary-bg fixed top-0 w-full grid px-20  2xl:px-10 xl:px-8 lg:px-6 md:px-4 grid-cols-3 sm:grid-cols-2 lg:flex lg:justify-between items-center border-solid border-b-2 border-my-divider z-40"
      />
      <Categories handleModalOpenClick={handleModalOpenClick} />
      <SportFacilities />
      <MapButton />
    </div>
  );
};

export default HomePage;
