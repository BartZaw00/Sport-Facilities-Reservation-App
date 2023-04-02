import React, { useEffect, useRef, useState } from "react";
import { FormButton, FormInput, ProfilePicture } from "../components";
import useAuth from "../hooks/useAuth";

const ProfileForm = () => {
  const { user } = useAuth();

  const usernameRef = useRef();
  const errRef = useRef();

  const [userId, setUserId] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isEditMode, setIsEditMode] = useState(false);
  const [success, setSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    if (isEditMode) {
      usernameRef.current.focus();
    }
  }, [isEditMode]);

  useEffect(() => {
    setErrMsg("");
  }, [username, name, surname, email, password, confirmPassword]);

  useEffect(() => {
    setUserId(user.id);
    setUsername(user.username);
    setName(user.name);
    setSurname(user.surname);
    setEmail(user.email);
  }, [user]);

  const updateUserDetails = async () => {
    fetch(`${import.meta.env.VITE_ACCOUNT_URL}/update/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username, name, surname, email, password, photoUrl}),
    })
      .then(async (response) => {
        console.log(response);
        const data = await response.json();
        console.log(data);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        setErrMsg(
          "Podana Nazwa Użytkownika lub Email jest już zajęty. Spróbuj ponownie."
        );
      });
  };

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = async () => {
    if (!username) {
      setErrMsg("Podaj Nazwę Użytkownika.");
      return;
    }
    if (!email) {
      setErrMsg("Podaj Email.");
      return;
    }
    if (!password) {
      setErrMsg("Podaj Hasło.");
      return;
    }
    setIsEditMode(false);
    await updateUserDetails();
  };

  const handleCancelClick = () => {
    setIsEditMode(false);
    // TODO: Implement cancel changes logic
  };

  return (
    <>
      <p
        className={
          success
            ? "text-green-500 text-sm mt-1 border-2 border-green-500 rounded-md px-3 py-2"
            : undefined
        }
      >
        {successMsg}
      </p>
      <p
        ref={errRef}
        className={
          errMsg
            ? "text-red-500 text-sm mt-1 border-2 border-red-500 rounded-md px-3 py-2"
            : undefined
        }
      >
        {errMsg}
      </p>
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

          <div className="flex-1 flex flex-col gap-2">
            <label htmlFor="username" className="text-my-gray">
              Nazwa Użytkownika
            </label>
            {isEditMode ? (
              <input
                type="text"
                id="username"
                ref={usernameRef}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-my-primary"
              />
            ) : (
              <div className="px-4 py-2 border border-gray-300 rounded-md">
                {username}
              </div>
            )}
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
    </>
  );
};

export default ProfileForm;
