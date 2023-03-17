import React from "react";

const ProfilePicture = ({ src, alt }) => {
  return (
    <div className="border-2 border-gray-300 rounded-full w-40 h-40 overflow-hidden shadow-2xl">
      <img className="w-full h-full object-cover" src={src} alt={alt} />
    </div>
  );
};

export default ProfilePicture;
