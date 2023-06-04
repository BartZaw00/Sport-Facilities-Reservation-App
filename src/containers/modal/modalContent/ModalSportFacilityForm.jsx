import React, { useEffect, useRef, useState } from "react";
import {
  ErrorMessage,
  ProfilePicture,
  SuccessMessage,
} from "../../../components/sharedComponents";
import { FormButton, FormProfilePictureUploader, FormSelectReservation } from "../../../components/formComponents";

const ModalSportFacilityForm = () => {
  const [type, setType] = useState("1");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [images, setImages] = useState([]);

  const [successMsg, setSuccessMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const typeOptions = [
    { label: "Orlik", value: "1" },
    { label: "Hala Sportowa", value: "2" },
    { label: "Boisko Piłkarskie", value: "3" },
    { label: "Boisko Tartanowe", value: "5" },
  ];

  const handleSaveClick = () => {
    // Perform form validation
    if (!name || !address || !city) {
      setErrMsg("Please fill in all fields");
      return;
    }

    // Perform save operation
    // ...

    setSuccessMsg("Form saved successfully");
  };

  const handleCancelClick = () => {
    // Reset form fields
    setName("");
    setAddress("");
    setCity("");
    setImages([]);

    setErrMsg("");
  };

  return (
    <>
      <SuccessMessage successMsg={successMsg} />
      <ErrorMessage errMsg={errMsg} />
      <div className="flex flex-col gap-5 px-10 pt-6 pb-10">
        <div className="flex justify-center items-center">
            <FormProfilePictureUploader  />
        </div>
        <div className="flex flex-col gap-2">
          <FormSelectReservation
            label="Typ"
            options={typeOptions}
            onChange={(value) => setType(value)}
            value={type}
            addSportFacility={true}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="address">Adres</label>
          <input
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-my-primary"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="city">Miasto</label>
          <input
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-my-primary"
          />
        </div>

        <div className="flex">
          <FormButton
            onClick={handleSaveClick}
            className="px-4 py-2 bg-my-primary text-white rounded-md hover:bg-my-primary-hover active:bg-my-primary-active"
          >
            Zapisz
          </FormButton>
        </div>
      </div>
    </>
  );
};

export default ModalSportFacilityForm;
