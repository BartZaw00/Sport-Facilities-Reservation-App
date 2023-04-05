import React, { useRef } from "react";

const ProfilePictureUploader = ({ onImageChange }) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    // const imageUrl = URL.createObjectURL(file);
    onImageChange(file);
  };

  return (
    <>
      <div
        className="px-4 py-2 bg-my-primary text-my-primary-bg rounded-md cursor-pointer hover:bg-my-primary-hover"
        onClick={handleButtonClick}
      >
        Zmień zdjęcie
      </div>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileInputChange}
      />
    </>
  );
};

export default ProfilePictureUploader;
