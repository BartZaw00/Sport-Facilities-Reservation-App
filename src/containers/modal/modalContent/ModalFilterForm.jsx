import React, { useContext, useState } from "react";
import {
  FormButton,
  FormDistanceFilter,
} from "../../../components/formComponents";
import { Select } from "antd";
import { ModalContext } from "../../../App";

const ModalFilterForm = ({ filters, setIsLoading }) => {
  const { setIsModalOpen } = useContext(ModalContext);

  const { filteredSurface, filteredDistance, filteredProvince } = filters;
  const [surface, setSurface] = filteredSurface;
  const [distance, setDistance] = filteredDistance;
  const [province, setProvince] = filteredProvince;

  const [surfaceValue, setSurfaceValue] = useState(surface);
  const [distanceValue, setDistanceValue] = useState(distance);
  const [provinceValue, setProvinceValue] = useState(province);

  const provinceOptions = [
    { label: "Dowolne", value: "" },
    { label: "Dolnośląskie", value: "dolnoslaskie" },
    { label: "Kujawsko-Pomorskie", value: "kujawsko-pomorskie" },
    { label: "Lubelskie", value: "lubelskie" },
    { label: "Lubuskie", value: "lubuskie" },
    { label: "Łódzkie", value: "Łódzkie" },
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
    { label: "Sztuczna trawa", value: "Sztuczna trawa" },
    { label: "Halowa", value: "halowa" },
    { label: "Tartan", value: "tartan" },
    { label: "Mączka ceglana", value: "mączka ceglana" },
    { label: "Inne", value: "inne" },
  ];

  const handleDistanceChange = (e) => {
    setDistanceValue(parseInt(e.target.value, 10));
  };

  const handleFilter = (e) => {
    e.preventDefault();

    if (surface === surfaceValue && distance === distanceValue && province === provinceValue) {
      setIsModalOpen(false);
      return;
    }

    setSurface(surfaceValue);
    setDistance(distanceValue);
    setProvince(provinceValue);

    setIsLoading(true);
    setIsModalOpen(false);
  };

  return (
    <form
      className="flex flex-col gap-5 px-10 pt-6 pb-10"
      onSubmit={handleFilter}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="surface">Nawierzchnia</label>
        <Select
          id="surface"
          size="large"
          value={surfaceValue}
          onChange={(value) => setSurfaceValue(value)}
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
        distance={distanceValue}
        handleDistanceChange={handleDistanceChange}
      />
      <div className="flex flex-col gap-2">
        <label htmlFor="surface">Województwo</label>
        <Select
          id="province"
          size="large"
          value={provinceValue}
          onChange={(value) => setProvinceValue(value)}
          className={`relative rounded-lg focus:outline-none hover:ring-1 focus:ring-my-primary`}
        >
          {provinceOptions.map((option) => (
            <Select.Option key={option.value} value={option.value}>
              {option.label}
            </Select.Option>
          ))}
        </Select>
      </div>
      <FormButton className="px-4 py-2 bg-my-primary text-white rounded-md hover:bg-my-primary-hover active:bg-my-primary-active focus:outline-none">
        Filtruj
      </FormButton>
    </form>
  );
};

export default ModalFilterForm;
