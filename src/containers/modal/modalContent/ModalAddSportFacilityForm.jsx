import React, { useState } from "react";
import {
  ErrorMessage,
  SuccessMessage,
} from "../../../components/sharedComponents";
import {
  FormButton,
  FormProfilePictureUploader,
  FormSelectReservation,
} from "../../../components/formComponents";
import locale from "antd/es/date-picker/locale/pl_PL";
import { TimePicker } from "antd";

const ModalAddSportFacilityForm = () => {
  const [sport, setSport] = useState("1");
  const [type, setType] = useState("1");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [openTime, setOpenTime] = useState("");
  const [closeTime, setCloseTime] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [province, setProvince] = useState("");
  const [images, setImages] = useState([]);

  const [successMsg, setSuccessMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const sportOptions = [
    { label: "Piłka nożna", value: "1" },
    { label: "Tenis", value: "2" },
    { label: "Koszykówka", value: "3" },
    { label: "Siatkówka", value: "4" },
  ];

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
        <div className="flex flex-col gap-2">
          <label htmlFor="images">Zdjęcia</label>
          {/* Replace the following code with your own image upload component */}
          <div className="flex justify-center items-center">
            <FormProfilePictureUploader />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <FormSelectReservation
            label="Sport"
            options={sportOptions}
            onChange={(value) => setSport(value)}
            value={sport}
            addSportFacility={true}
          />
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
          <label htmlFor="name">Nazwa</label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-my-primary"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description">Opis</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-my-primary"
            rows={4} // Określ liczbę wierszy dla pola tekstowego
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
        <div className="flex flex-col gap-2">
          <label htmlFor="province">Województwo</label>
          <input
            id="province"
            value={province}
            onChange={(e) => setProvince(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-my-primary"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="country">Państwo</label>
          <input
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-my-primary"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="openTime"
          >
            Czas Otwarcia
          </label>
          <TimePicker
            locale={locale}
            id="openTime"
            format="HH:mm"
            onChange={(value) => setOpenTime(value)}
            minuteStep={30}
            inputReadOnly={true}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-my-primary bg-white text-gray-900 shadow-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
        <label
            htmlFor="closeTime"
          >
            Czas Zamknięcia
          </label>
          <TimePicker
            locale={locale}
            id="closeTime"
            format="HH:mm"
            onChange={(value) => setCloseTime(value)}
            minuteStep={30}
            inputReadOnly={true}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-my-primary bg-white text-gray-900 shadow-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="latitude">Szerokość geograficzna</label>
          <input
            id="latitude"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-my-primary"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="longitude">Długość geograficzna</label>
          <input
            id="longitude"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-my-primary"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phoneNumber">Numer Telefonu</label>
          <input
            id="phoneNumber"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-my-primary"
          />
        </div>

        <div className="flex gap-4">
          <FormButton
            onClick={handleSaveClick}
            className="px-4 py-2 bg-my-primary text-white rounded-md hover:bg-my-primary-hover active:bg-my-primary-active"
          >
            Dodaj
          </FormButton>
        </div>
      </div>
    </>
  );
};

export default ModalAddSportFacilityForm;
