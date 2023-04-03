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
        console.log(response);
        const data = await response.json();
        console.log(data);
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
            <>
              <div className="flex-1 flex flex-col gap-2">
                <label
                  htmlFor="password"
                  className="text-my-gray flex items-center"
                >
                  <span>Hasło:</span>
                  <GoCheck
                    color="green"
                    className={validPassword ? "block" : "hidden"}
                  />
                  <GoX
                    color="red"
                    className={validPassword || !password ? "hidden" : "block"}
                  />
                </label>
                <input
                  id="password"
                  type="password"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-my-primary"
                  placeholder="*********"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  aria-invalid={validPassword ? "false" : "true"}
                  aria-describedby="passwordnote"
                  onFocus={() => setPasswordFocus(true)}
                  onBlur={() => setPasswordFocus(false)}
                />
              </div>
              <p
                id="passwordnote"
                className={
                  passwordFocus && password && !validPassword
                    ? "relative bg-gray-100 border border-gray-300 text-gray-600 py-2 px-4 rounded mt-2 transition-opacity"
                    : "hidden"
                }
              >
                <FaInfoCircle className="absolute right-2 top-2" />
                <span>
                  Od 8 do 30 znaków.
                  <br />
                  Musi zawierać przynajmniej jedną wielką literę, małą literę
                  oraz cyfrę.
                  <br />
                  Musi zawierać przynajmniej jeden z nastepujących znaków
                  specjalnych:&nbsp;
                  <span aria-label="exclamantion mark">!</span>&nbsp;
                  <span aria-label="at symbol">@</span>&nbsp;
                  <span aria-label="hashtag">#</span>&nbsp;
                  <span aria-label="dollar sign">$</span>&nbsp;
                  <span aria-label="percent">%</span>.
                </span>
              </p>
              <div className="flex-1 flex flex-col gap-2">
                <label
                  htmlFor="confirm_password"
                  className="text-my-gray flex items-center"
                >
                  <span>Potwierdź Hasło:</span>
                  <GoCheck
                    color="green"
                    className={validMatch && matchPassword ? "block" : "hidden"}
                  />
                  <GoX
                    color="red"
                    className={
                      validMatch || !matchPassword ? "hidden" : "block"
                    }
                  />
                </label>
                <input
                  id="confirm_password"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-my-primary"
                  type="password"
                  placeholder="*********"
                  autoComplete="off"
                  onChange={(e) => setMatchPassword(e.target.value)}
                  required
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                />
              </div>
            </>
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
              <button
                className="px-4 py-2 bg-my-primary text-white rounded-md hover:bg-my-primary-hover focus:outline-none"
                onClick={handleEditProfileClick}
              >
                Edytuj Profil
              </button>
              <button
                className="px-4 py-2 bg-my-primary text-white rounded-md hover:bg-my-primary-hover focus:outline-none"
                onClick={handleChangePasswordClick}
              >
                Zmień Hasło
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileForm;
