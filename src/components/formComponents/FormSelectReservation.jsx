import React from "react";
import { Select } from "antd";

const FormSelectReservation = ({
  label,
  options,
  value,
  onChange,
  isMediumScreen,
  isSmallScreen,
  addSportFacility
}) => {
  return (
    <div className="flex flex-col gap-4 md:gap-2">
      <label
        htmlFor="duration"
        className={`${isMediumScreen ? "text-xs" : "text-lg"} ${addSportFacility ? 'font-base text-[16px]' : 'font-medium'}`}
      >
        {label}
      </label>
      <Select
        id="duration"
        size="large"
        value={value}
        onChange={onChange}
        className={`relative rounded-lg focus:outline-none hover:ring-1 focus:ring-my-primary ${
          isMediumScreen ? "text-xs  h-10" : "text-lg"
        } ${isSmallScreen && "w-[55px]"}`}
        dropdownStyle={
          isMediumScreen && {
            position: "fixed",
            top: "calc(100% - 280px)",
            width: "100%",
            minWidth: "160px"
          }
        }
      >
        {options.map((option) => (
          <Select.Option key={option.value} value={option.value}>
            {option.label}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};

export default FormSelectReservation;
