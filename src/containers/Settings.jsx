import React from "react";

const Settings = () => {
  return (
    <div className="flex flex-col gap-4 pb-4">
      <div className="flex flex-col gap-4">
        <label htmlFor="theme" className="text-my-gray">
          Motyw
        </label>
        <select
          id="theme"
          className="px-4 py-2 border border-gray-300 rounded-sm outline-black"
        >
          <option value="light">Jasny</option>
          <option value="dark">Ciemny</option>
        </select>
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="language" className="text-my-gray">
          Język
        </label>
        <select
          id="language"
          className="px-4 py-2 border border-gray-300 rounded-sm"
        >
          <option value="polish">Polski</option>
        </select>
      </div>
    </div>
  );
};

export default Settings;
