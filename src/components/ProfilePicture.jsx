import React from "react";

import { CgProfile } from "react-icons/cg";


const ProfilePicture = ({ src, alt }) => {
  return (
    <div className="border-2 border-gray-300 rounded-full w-40 h-40 sm:w-28 sm:h-28 overflow-hidden shadow-2xl">
      <CgProfile className="w-full h-full object-cover" />
      {/* <img className="w-full h-full object-cover" src={src} alt={alt} /> */}
    </div>
  );
};

export default ProfilePicture;
