import React from "react";

import { FormButton, FormSelect } from "../components";

const SettingsForm = () => {
  return (
    <div className="flex flex-col gap-4 pb-4">
      <FormSelect
        label="Motyw"
        id="theme"
        options={[
          { value: "light", label: "Jasny" },
          { value: "dark", label: "Ciemny" },
        ]}
        className="px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-my-primary"
        labelClassName="text-my-gray"
      />
      <FormSelect
        label="Język"
        id="language"
        options={[{ value: "polish", label: "Polski" }]}
        className="px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-my-primary"
        labelClassName="text-my-gray"
      />
      <FormButton className="px-4 py-2 bg-my-primary text-white rounded-md hover:bg-my-primary-hover focus:outline-none">
        Zapisz
      </FormButton>
    </div>
  );
};

export default SettingsForm;
