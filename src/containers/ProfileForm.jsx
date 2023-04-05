import React, { useEffect, useRef, useState } from "react";
import {
  ErrorMessage,
  FormButton,
  FormInput,
  ProfilePicture,
  SuccessMessage,
} from "../components";
import useAuth from "../hooks/useAuth";
import { GoX, GoCheck } from "react-icons/go";
import { FaInfoCircle } from "react-icons/fa";
import FormPasswordInput from "../components/FormPasswordInput";

const USERNAME_REGEX = /^[a-zA-Z][a-zA-Z0-9_-]{3,29}$/;
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%])[A-Za-z\d!@#$%]{8,30}$/;

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
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [isEditProfileMode, setIsEditProfileMode] = useState(false);
  const [isEditPasswordMode, setIsEditPasswordMode] = useState(false);

  const [successMsg, setSuccessMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    if (isEditProfileMode) {
      usernameRef.current.focus();
    }
  }, [isEditProfileMode]);

  useEffect(() => {
    setErrMsg("");
  }, [username, name, surname, email, password, matchPassword]);

  useEffect(() => {
    setUserId(user.id);
    setPhotoUrl(user.photoUrl || "");
    setUsername(user.username);
    setName(user.name || "");
    setSurname(user.surname || "");
    setEmail(user.email);
  }, [
    user.id,
    user.photoUrl,
    user.username,
    user.name,
    user.surname,
    user.email,
  ]);

  useEffect(() => {
    const result = PASSWORD_REGEX.test(password);
    setValidPassword(result);
    const match = password === matchPassword;
    setValidMatch(match);
  }, [password, matchPassword]);

  const updateUserDetails = async () => {
    fetch(`${import.meta.env.VITE_ACCOUNT_URL}/updateUser/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        photoUrl,
        username,
        name,
        surname,
        email,
      }),
    })
      .then(async (response) => {
        const data = await response.json();

        if (response.ok) {
          setSuccessMsg("Pomyślnie udało się zaktualizować profil");
          setIsEditProfileMode(false);
          setTimeout(() => {
            setSuccessMsg("");
          }, 5000);
        }
      })
      .catch((error) => {
        setErrMsg(
          "Podana Nazwa Użytkownika lub Email jest już zajęty. Spróbuj ponownie."
        );
      });
  };

  const updateUserPassword = async () => {
    fetch(`${import.meta.env.VITE_ACCOUNT_URL}/updateUserPassword/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          setErrMsg("Nie udało się zaktualizować hasła. Spróbuj ponownie");
          return;
        }

        setSuccessMsg("Pomyślnie udało się zaktualizować profil");
        setIsEditPasswordMode(false);
        setTimeout(() => {
          setSuccessMsg("");
        }, 5000);
      })

      .catch(() => {
        setErrMsg("Wystąpił błąd. Spróbuj ponownie.");
      });
  };

  const handleEditProfileClick = () => {
    setIsEditProfileMode(true);
  };

  const handleChangePasswordClick = () => {
    setIsEditPasswordMode(true);
  };

  const handleSaveClick = async () => {
    const usr = USERNAME_REGEX.test(username);
    const eml = EMAIL_REGEX.test(email);

    if (!usr || !eml) {
      setErrMsg("Niedozwolona operacja");
      return;
    }

    if (isEditProfileMode) {
      if (!username) {
        setErrMsg("Podaj Nazwę Użytkownika.");
        return;
      }
      if (!email) {
        setErrMsg("Podaj Email.");
        return;
      }

      await updateUserDetails();
    }

    if (isEditPasswordMode) {
      if (!password) {
        setErrMsg("Podaj Hasło.");
        return;
      }

      await updateUserPassword();
    }
  };

  const handleCancelClick = () => {
    if (isEditProfileMode) setIsEditProfileMode(false);
    if (isEditPasswordMode) setIsEditPasswordMode(false);
    setErrMsg("");
  };

  return (
    <>
      <SuccessMessage successMsg={successMsg} />
      <ErrorMessage errMsg={errMsg} />
      <div className="flex flex-col gap-5 px-10 pt-6 pb-10">
        {isEditPasswordMode || (
          <div className="flex justify-center items-center gap-4">
            <ProfilePicture src="src\assets\orlik.jpg" alt="Profile picture" />
            {isEditProfileMode && (
              <div className="flex flex-col gap-4">
                <FormButton className="px-4 py-2 bg-my-primary text-my-primary-bg rounded-md hover:bg-my-primary-hover">
                  Zmień zdjęcie
                </FormButton>
                <FormButton className="px-4 py-2 bg-my-primary-bg text-my-primary-text border-2 border-gray-300 rounded-md hover:bg-gray-200">
                  Usuń zdjęcie
                </FormButton>
              </div>
            )}
          </div>
        )}
        <div className="max-w-md flex flex-col gap-4">
          {isEditPasswordMode ? (
            <FormPasswordInput
              password={password}
              setPassword={setPassword}
              validPassword={validPassword}
              setValidPassword={setValidPassword}
              passwordFocus={passwordFocus}
              setPasswordFocus={setPasswordFocus}
              matchPassword={matchPassword}
              setMatchPassword={setMatchPassword}
              validMatch={validMatch}
              setValidMatch={setValidMatch}
              matchFocus={matchFocus}
              setMatchFocus={setMatchFocus}
            />
          ) : (
            <>
              <div className="flex flex-wrap gap-4">
                <div className="flex-1 flex flex-col gap-2">
                  <label htmlFor="name" className="text-my-gray">
                    Imię
                  </label>
                  {isEditProfileMode ? (
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
                <div className="flex-1 flex flex-col gap-2">
                  <label htmlFor="surname" className="text-my-gray">
                    Nazwisko
                  </label>
                  {isEditProfileMode ? (
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
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label htmlFor="username" className="text-my-gray">
                  Nazwa Użytkownika
                </label>
                {isEditProfileMode ? (
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
              <div className="flex-1 flex flex-col gap-2">
                <label htmlFor="email" className="text-my-gray">
                  Email
                </label>
                {isEditProfileMode ? (
                  <input
                    type="text"
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
            </>
          )}
          {isEditProfileMode || isEditPasswordMode ? (
            <div className="flex flex-col gap-4">
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
            <>
              <FormButton
                onClick={handleEditProfileClick}
                className="px-4 py-2 bg-my-primary text-white rounded-md hover:bg-my-primary-hover focus:outline-none"
              >
                Edytuj Profil
              </FormButton>
              <FormButton
                onClick={handleChangePasswordClick}
                className="px-4 py-2 bg-my-primary text-white rounded-md hover:bg-my-primary-hover focus:outline-none"
              >
                Zmień Hasło
              </FormButton>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileForm;
