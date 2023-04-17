import React, { useState } from "react";
import { FormButton, FormSelect } from "../../../components/formComponents";
import { Select } from "antd";

const ModalSettingsForm = () => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("polish");

  const themeOptions = [
    { value: "light", label: "Jasny" },
    { value: "dark", label: "Ciemny" },
  ];

  const languageOptions = [{ value: "polish", label: "Polski" }];

  return (
    <div className="flex flex-col gap-4 pb-4">
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
      <div className="flex flex-col gap-2">
        <label htmlFor="surface">Język</label>
        <Select
          id="language"
          size="large"
          value={language}
          onChange={(value) => setLanguage(value)}
          className={`relative rounded-lg focus:outline-none hover:ring-1 focus:ring-my-primary`}
        >
          {languageOptions.map((option) => (
            <Select.Option key={option.value} value={option.value}>
              {option.label}
            </Select.Option>
          ))}
        </Select>
      </div>
      <FormButton className="px-4 py-2 bg-my-primary text-white rounded-md hover:bg-my-primary-hover focus:outline-none">
        Zapisz
      </FormButton>
    </div>
  );
};

export default ModalSettingsForm;
