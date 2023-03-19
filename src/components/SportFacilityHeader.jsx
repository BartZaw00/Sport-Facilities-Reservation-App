import React from 'react'

const SportFacilityHeader = ({ name, type }) => {
    return (
      <div className="mt-4">
        <h2 className="font-bold text-gray-800 text-4xl">
          {name}
        </h2>
        <p className="mt-2 text-gray-600 font-semibold text-2xl">
          {type}
        </p>
      </div>
    );
  };

export default SportFacilityHeader