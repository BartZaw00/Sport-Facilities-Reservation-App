import React from "react";
import { FormButton, FormInput } from "../../../components/formComponents";

const ModalPasswordForm = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  return (
    <form>
      <div className="flex-1 flex flex-col gap-2">
        <label htmlFor="password" className="text-my-gray">
          Hasło
        </label>
        {isEditMode ? (
          <input
            type="password"
            id="password"
            placeholder="*********"
            value={password}
            //onChange={onChange}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-my-primary"
          />
        ) : (
          <div className="px-4 py-2 border border-gray-300 rounded-md">
            *********
          </div>
        )}
      </div>
      {isEditMode ? (
        <div className="flex flex-col gap-4">
          <FormInput
            label="Potwierdź hasło"
            id="confirm-password"
            value={confirmPassword}
            //onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            isEditMode={isEditMode}
          />
          <div className="flex gap-4">
            <FormButton
              //onClick={handleSaveClick}
              className="px-4 py-2 bg-my-primary text-white rounded-md hover:bg-my-primary-hover focus:outline-none"
            >
              Zapisz
            </FormButton>
            <FormButton
              //onClick={handleCancelClick}
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-400 focus:outline-none"
            >
              Anuluj
            </FormButton>
          </div>
        </div>
      ) : (
        <button
          className="px-4 py-2 bg-my-primary text-white rounded-md hover:bg-my-primary-hover focus:outline-none"
          onClick={handleEditClick}
        >
          Zmień Hasło
        </button>
      )}
    </form>
  );
};

export default ModalPasswordForm;
