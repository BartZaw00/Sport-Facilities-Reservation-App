import React, { useState } from "react";

const ProfileDetails = () => {
  const [name, setName] = useState("Jan");
  const [surname, setSurname] = useState("Kowalski");
  const [email, setEmail] = useState("jan.kowalski@example.com");
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

  return (
    <div className="mt-24 px-80 flex flex-col gap-5 px-10 pt-6 pb-10">
      <div className="flex flex-col gap-4">
        <label htmlFor="photo" className="text-my-gray">
          Zdjęcie profilowe
        </label>
        {isEditMode ? (
          <input type="file" id="photo" />
        ) : (
          <div className="px-4 py-2 border border-gray-300 rounded-md">
            {/* TODO: Display user's profile photo */}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="name" className="text-my-gray">
          Imię
        </label>
        {isEditMode ? (
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-my-primary"
          />
        ) : (
          <div className="px-4 py-2 border border-gray-300 rounded-md">
            {name}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="surname" className="text-my-gray">
          Nazwisko
        </label>
        {isEditMode ? (
          <input
            type="text"
            id="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-my-primary"
          />
        ) : (
          <div className="px-4 py-2 border border-gray-300 rounded-md">
            {surname}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="email" className="text-my-gray">
          Email
        </label>
        {isEditMode ? (
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-my-primary"
          />
        ) : (
          <div className="px-4 py-2 border border-gray-300 rounded-md">
            {email}
          </div>
        )}
      </div>
      {isEditMode ? (
        <div className="flex gap-4">
          <button
            className="px-4 py-2 bg-my-primary text-white rounded-md hover:bg-my-primary-hover focus:outline-none"
            onClick={handleSaveClick}
          >
            Zapisz
          </button>
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-400 focus:outline-none"
            onClick={handleCancelClick}
          >
            Anuluj
          </button>
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
  );
};
export default ProfileDetails;
