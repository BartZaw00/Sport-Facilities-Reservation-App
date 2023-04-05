import React from 'react'

const SportFacilityDetail = ({ icon: Icon, text }) => {
    return (
      <div className="flex items-center sm:flex-col md:text-sm sm:px-2">
        <Icon className="w-5 h-5 mr-2" />
        <p>{text}</p>
      </div>
    );
  };

export default SportFacilityDetail