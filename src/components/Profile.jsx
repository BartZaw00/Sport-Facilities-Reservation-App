import React from "react";

import { TfiMenu } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";

const Profile = () => {
  return (
    <div className="pr-1 pl-3 py-1 flex items-center gap-2 border border-gray-300 rounded-full shadow cursor-pointer hover:shadow-md">
      <TfiMenu size={15} />
      <CgProfile size={25} />
    </div>
  );
};

export default Profile;
