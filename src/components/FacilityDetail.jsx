import React from 'react'

const FacilityDetail = ({ icon: Icon, text }) => {
    return (
      <div className="flex items-center">
        <Icon className="w-5 h-5 mr-2" />
        <p>{text}</p>
      </div>
    );
  };

export default FacilityDetail