import React, { useState } from "react";
import {
  FormButton,
  FormDistanceFilter,
  FormSelect,
} from "../../../components/formComponents";

const ModalFilterForm = () => {
  const [distance, setDistance] = useState(10);

  const handleDistanceChange = (e) => {
    setDistance(parseInt(e.target.value, 10));
  };

  const locationOptions = [
    { label: "Wybierz województwo", value: "" },
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
    { label: "Wybierz nawierzchnię", value: "" },
    { label: "Naturalna trawa", value: "naturalna trawa" },
    { label: "Sztuczna trawa", value: "sztuczna trawa" },
    { label: "Halowa", value: "halowa" },
    { label: "Tartan", value: "tartan" },
    { label: "Mączka ceglana", value: "mączka ceglana" },
    { label: "Inne", value: "inne" },
  ];

  return (
    <div className="flex flex-col gap-5 px-10 pt-6 pb-10">
      <FormSelect
        label="Nawierzchnia"
        id="surface"
        options={surfaceOptions}
        className="px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-my-primary"
        divClassName="flex flex-col gap-2"
      />
      <FormDistanceFilter
        distance={distance}
        handleDistanceChange={handleDistanceChange}
      />
      <FormSelect
        label="Lokalizacja"
        id="location"
        options={locationOptions}
        className="px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-my-primary"
        divClassName="flex flex-col gap-2"
      />
      <FormButton className="px-4 py-2 bg-my-primary text-white rounded-md hover:bg-my-primary-hover focus:outline-none">
        Filtruj
      </FormButton>
    </div>
  );
};

export default ModalFilterForm;
