import React from "react";

import { Categories, Navbar, SportFacilities } from "../containers/index";

const HomePage = () => {
  return (
    <div id="home-page" className="bg-my-primary-bg">
      <Navbar />
      <Categories />
      <SportFacilities />
    </div>
  );
};

export default HomePage;
