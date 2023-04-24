import React, { useContext, useState } from "react";
import { FormButton, FormDistanceFilter } from "../../../components/formComponents";
import { Select } from "antd";
import { ModalContext } from "../../../App";
import { surfaceOptions, provinceOptions } from "../../../utils/data";

const ModalFilterForm = ({ filters, setIsLoading }) => {
  // Get the setIsModalOpen function from the ModalContext
  const { setIsModalOpen } = useContext(ModalContext);

  // Extract the filtered values from the filters object
  const { filteredSurface, filteredDistance, filteredProvince } = filters;
  const [surface, setSurface] = filteredSurface;
  const [distance, setDistance] = filteredDistance;
  const [province, setProvince] = filteredProvince;

  // Create state variables to hold the values of the form inputs
  const [surfaceValue, setSurfaceValue] = useState(surface);
  const [distanceValue, setDistanceValue] = useState(distance);
  const [provinceValue, setProvinceValue] = useState(province);

  // Handle change of surface input
  const handleSurfaceChange = (value) => {
    setSurfaceValue(value);
  };

  // Handle change of distance input
  const handleDistanceChange = (e) => {
    setDistanceValue(parseInt(e.target.value, 10));
  };

  // Handle change of province input
  const handleProvinceChange = (value) => {
    setProvinceValue(value);
  };

  // Handle filter form submission
  const handleFilter = (e) => {
    e.preventDefault();

    // If the values haven't changed, close the modal and return
    if (
      surface === surfaceValue &&
      distance === distanceValue &&
      province === provinceValue
    ) {
      setIsModalOpen(false);
      return;
    }

    // Update the filtered values with the new values
    setSurface(surfaceValue);
    setDistance(distanceValue);
    setProvince(provinceValue);

    // Set loading state and close the modal
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
          onChange={(value) => handleSurfaceChange(value)}
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
          onChange={(value) => handleProvinceChange(value)}
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
