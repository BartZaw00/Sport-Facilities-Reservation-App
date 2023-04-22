import React from "react";
import { CgProfile } from "react-icons/cg";

const ProfilePicture = ({ src, alt, navbar }) => {
  return (
    <div
      className={`${
        navbar
          ? src && "w-8 h-8 rounded-full overflow-hidden"
          : "w-40 h-40 sm:w-28 sm:h-28 border-2 border-gray-300 rounded-full overflow-hidden shadow-2xl"
      } `}
    >
      {src ? (
        <img className="w-full h-full object-cover" src={src} alt={alt} />
      ) : navbar ? (
        <CgProfile size={25} />
      ) : (
        <CgProfile className="w-full h-full object-cover" />
      )}
    </div>
  );
};

export default ProfilePicture;
