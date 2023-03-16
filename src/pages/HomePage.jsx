import React from "react";

import { MapButton } from "../components";

import { Categories, Navbar, SportFacilities } from "../containers/index";

const HomePage = () => {
  return (
    <div id="home-page" className="bg-my-primary-bg">
      <Navbar />
      <Categories />
      <SportFacilities />
      <MapButton />
    </div>
  );
};

export default HomePage;
