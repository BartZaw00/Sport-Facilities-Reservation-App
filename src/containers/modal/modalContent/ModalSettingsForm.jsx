import React, { useContext, useState } from "react";
import { FormButton, FormSelect } from "../../../components/formComponents";
import { Select } from "antd";
import { ModalContext } from "../../../App";

const ModalSettingsForm = () => {
  const [theme, setTheme] = useState("light");

  const themeOptions = [
    { value: "light", label: "Jasny" },
  ];

  const handleSubmit = () => {
    setIsModalOpen(false);
  };

  return (
    <form className="flex flex-col gap-4 pb-4" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label htmlFor="surface">Motyw</label>
        <Select
          id="there"
          size="large"
          value={theme}
          onChange={(value) => setTheme(value)}
          className={`relative rounded-lg focus:outline-none hover:ring-1 focus:ring-my-primary`}
        >
          {themeOptions.map((option) => (
            <Select.Option key={option.value} value={option.value}>
              {option.label}
            </Select.Option>
          ))}
        </Select>
      </div>
      <FormButton className="px-4 py-2 bg-my-primary text-white rounded-md hover:bg-my-primary-hover active:bg-my-primary-active">
        Zapisz
      </FormButton>
    </form>
  );
};

export default ModalSettingsForm;
