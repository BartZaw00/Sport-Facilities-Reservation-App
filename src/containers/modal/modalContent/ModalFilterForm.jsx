import React, { useState } from "react";
import {
  FormButton,
  FormDistanceFilter,
  FormSelect,
} from "../../../components/formComponents";
import { Select } from "antd";

const ModalFilterForm = () => {
  const [distance, setDistance] = useState(10);
  const [surface, setSurface] = useState("");
  const [location, setLocation] = useState("");

  const handleDistanceChange = (e) => {
    setDistance(parseInt(e.target.value, 10));
  };

  const locationOptions = [
    { label: "Dowolne", value: "" },
    { label: "Dolnośląskie", value: "dolnoslaskie" },
    { label: "Kujawsko-Pomorskie", value: "kujawsko-pomorskie" },
    { label: "Lubelskie", value: "lubelskie" },
    { label: "Lubuskie", value: "lubuskie" },
    { label: "Łódzkie", value: "lodzkie" },
    { label: "Małopolskie", value: "malopolskie" },
    { label: "Mazowieckie", value: "mazowieckie" },
    { label: "Opolskie", value: "opolskie" },
    { label: "Podkarpackie", value: "podkarpackie" },
    { label: "Podlaskie", value: "podlaskie" },
    { label: "Pomorskie", value: "pomorskie" },
    { label: "Śląskie", value: "slaskie" },
    { label: "Świętokrzyskie", value: "swietokrzyskie" },
    { label: "Warmińsko-Mazurskie", value: "warminsko-mazurskie" },
    { label: "Wielkopolskie", value: "wielkopolskie" },
    { label: "Zachodniopomorskie", value: "zachodniopomorskie" },
  ];

  const surfaceOptions = [
    { label: "Dowolna", value: "" },
    { label: "Naturalna trawa", value: "naturalna trawa" },
    { label: "Sztuczna trawa", value: "sztuczna trawa" },
    { label: "Halowa", value: "halowa" },
    { label: "Tartan", value: "tartan" },
    { label: "Mączka ceglana", value: "mączka ceglana" },
    { label: "Inne", value: "inne" },
  ];

  return (
    <div className="flex flex-col gap-5 px-10 pt-6 pb-10">
      <div className="flex flex-col gap-2">
        <label htmlFor="surface">Nawierzchnia</label>
        <Select
          id="surface"
          size="large"
          value={surface}
          onChange={(value) => setSurface(value)}
          className={`relative rounded-lg focus:outline-none hover:ring-1 focus:ring-my-primary`}
        >
          {surfaceOptions.map((option) => (
            <Select.Option key={option.value} value={option.value}>
              {option.label}
            </Select.Option>
          ))}
        </Select>
      </div>
      <FormDistanceFilter
        distance={distance}
        handleDistanceChange={handleDistanceChange}
      />
      <div className="flex flex-col gap-2">
        <label htmlFor="surface">Województwo</label>
        <Select
          id="location"
          size="large"
          value={location}
          onChange={(value) => setLocation(value)}
          className={`relative rounded-lg focus:outline-none hover:ring-1 focus:ring-my-primary`}
        >
          {locationOptions.map((option) => (
            <Select.Option key={option.value} value={option.value}>
              {option.label}
            </Select.Option>
          ))}
        </Select>
      </div>
      <FormButton className="px-4 py-2 bg-my-primary text-white rounded-md hover:bg-my-primary-hover focus:outline-none">
        Filtruj
      </FormButton>
    </div>
  );
};

export default ModalFilterForm;
