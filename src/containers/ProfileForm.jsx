import React, { useState } from "react";
import { FormButton, FormInput, ProfilePicture } from "../components";

const ProfileForm = () => {
  const [name, setName] = useState("Jan");
  const [surname, setSurname] = useState("Kowalski");
  const [email, setEmail] = useState("jan.kowalski@example.com");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = () => {
    setIsEditMode(false);
    // TODO: Implement save changes logic
  };

  const handleCancelClick = () => {
    setIsEditMode(false);
    // TODO: Implement cancel changes logic
  };

  const handlePasswordChange = () => {
    // Submit the changes to the password
  };

  return (
    <div className="flex flex-col gap-5 px-10 pt-6 pb-10">
      <div className="flex justify-center items-center gap-4">
        <ProfilePicture src="src\assets\orlik.jpg" alt="Profile picture" />
        <div className="flex flex-col gap-4">
          <FormButton className="px-4 py-2 bg-my-primary text-my-primary-bg rounded-md hover:bg-my-primary-hover">
            Zmień zdjęcie
          </FormButton>
          <FormButton className="px-4 py-2 bg-my-primary-bg text-my-primary-text border-2 border-gray-300 rounded-md hover:bg-gray-200">
            Usuń zdjęcie
          </FormButton>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-4">
          <FormInput
            label="Imię"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            isEditMode={isEditMode}
          />
          <FormInput
            label="Nazwisko"
            id="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            type="text"
            isEditMode={isEditMode}
          />
        </div>
        <FormInput
          label="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          isEditMode={isEditMode}
        />
        <FormInput
          label="Hasło"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          isEditMode={isEditMode}
        />
        {isEditMode ? (
          <div className="flex flex-col gap-4">
            <FormInput
              label="Potwierdź hasło"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              isEditMode={isEditMode}
            />
            <div className="flex gap-4">
              <FormButton
                onClick={handleSaveClick}
                className="px-4 py-2 bg-my-primary text-white rounded-md hover:bg-my-primary-hover focus:outline-none"
              >
                Zapisz
              </FormButton>
              <FormButton
                onClick={handleCancelClick}
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
            Edytuj profil
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileForm;
