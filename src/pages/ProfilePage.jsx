import React from "react";
import { Navbar, ProfileDetails } from "../containers";

const ProfilePage = () => {
  return (
    <div id="profile-page" className="bg-my-primary-bg">
      <Navbar />
      <ProfileDetails />
    </div>
  );
};

export default ProfilePage;
