import React, { useEffect, useRef, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { ErrorMessage, ProfilePicture, SuccessMessage } from "../../../components/sharedComponents";
import { FormButton, FormPasswordInput, FormProfilePictureUploader } from "../../../components/formComponents";
import { updateUserDetails, updateUserPassword, uploadImage } from "../../../services/AccountService";

const USERNAME_REGEX = /^[a-zA-Z][a-zA-Z0-9_-]{3,29}$/;
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%])[A-Za-z\d!@#$%]{8,30}$/;

const ModalProfileForm = () => {
  // Using custom hook to get the authenticated user data and update it
  const { user, updateUser } = useAuth();

  // Creating references to the username input and the error message element
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

  const passwordInputProps = {
    password: password,
    setPassword: setPassword,
    validPassword: validPassword,
    setValidPassword: setValidPassword,
    passwordFocus: passwordFocus,
    setPasswordFocus: setPasswordFocus,
    matchPassword: matchPassword,
    setMatchPassword: setMatchPassword,
    validMatch: validMatch,
    setValidMatch: setValidMatch,
    matchFocus: matchFocus,
    setMatchFocus: setMatchFocus,
  };

  // Setting focus to the username input when edit profile mode is activated
  useEffect(() => {
    if (isEditProfileMode) {
      usernameRef.current.focus();
    }
  }, [isEditProfileMode]);

  // Clearing error message when any input field is changed
  useEffect(() => {
    setErrMsg("");
  }, [photoUrl, username, name, surname, email, password, matchPassword]);

  // Updating state variables with the user data when the component is first mounted
  useEffect(() => {
    setUserId(user.id);
    setPhotoUrl(user.photoUrl || "");
    setUsername(user.username);
    setName(user.name || "");
    setSurname(user.surname || "");
    setEmail(user.email);
  }, [ user.id, user.photoUrl, user.username, user.name, user.surname, user.email ]);

  // Validating the password and the match password when either of them is changed
  useEffect(() => {
    const result = PASSWORD_REGEX.test(password);
    setValidPassword(result);
    const match = password === matchPassword;
    setValidMatch(match);
  }, [password, matchPassword]);

  // Updating user details and displaying a success message when the form is submitted
  const handleUpdateUserDetails = async () => {
    try {
      const data = await updateUserDetails(
        photoUrl,
        username,
        name,
        surname,
        email
      );
      updateUser(data);
      setSuccessMsg("Pomyślnie udało się zaktualizować profil");
      setIsEditProfileMode(false);
      setTimeout(() => {
        setSuccessMsg("");
      }, 5000);
    } catch (error) {
      setErrMsg(
        "Podana Nazwa Użytkownika lub Email jest już zajęty. Spróbuj ponownie."
      );
    }
  };

  // Updating user password and displaying a success message when the form is submitted
  const handleUpdateUserPassword = async () => {
    try {
      // TO FIX
      await updateUserPassword(password);
      setSuccessMsg("Pomyślnie udało się zaktualizować hasło");
      setIsEditPasswordMode(false);
      setTimeout(() => {
        setSuccessMsg("");
      }, 5000);
    } catch (error) {
      setErrMsg("Nie udało się zaktualizować hasła. Spróbuj ponownie");
    }
  };

  // Switch to edit profile mode
  const handleEditProfileClick = () => {
    setIsEditProfileMode(true);
  };

  // Switch to change password mode
  const handleChangePasswordClick = () => {
    setIsEditPasswordMode(true);
  };

  // Upload user's image
  const handleImageChange = async (imageFile) => {
    try {
      const photoUrl = await uploadImage(imageFile);
      setPhotoUrl(photoUrl);
    } catch (error) {
      console.error(error);
    }
  };

  // Save user's profile or password changes
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

      await handleUpdateUserDetails();
    }

    if (isEditPasswordMode) {
      if (!password) {
        setErrMsg("Podaj Hasło.");
        return;
      }

      await handleUpdateUserPassword();
    }
  };

  // Cancel user's profile or password changes and reset the form fields
  const handleCancelClick = () => {
    if (isEditProfileMode) setIsEditProfileMode(false);
    if (isEditPasswordMode) setIsEditPasswordMode(false);
    setUserId(user.id);
    setPhotoUrl(user.photoUrl || "");
    setUsername(user.username);
    setName(user.name || "");
    setSurname(user.surname || "");
    setEmail(user.email);
    setErrMsg("");
  };

  return (
    <>
      <SuccessMessage successMsg={successMsg} />
      <ErrorMessage errMsg={errMsg} />
      <div className="flex flex-col gap-5 px-10 pt-6 pb-10">
        <div className="flex justify-center items-center gap-4">
          <ProfilePicture src={photoUrl} alt="Profile picture" navbar={false} />
          {isEditProfileMode && (
            <div className="flex flex-col gap-4">
              <FormProfilePictureUploader onImageChange={handleImageChange} />
              <button
                className="px-4 py-2 bg-my-primary-bg text-my-primary-text border-2 border-gray-300 rounded-md hover:bg-gray-200 active:bg-gray-300"
                onClick={() => setPhotoUrl("")}
              >
                Usuń zdjęcie
              </button>
            </div>
          )}
        </div>
        <div className="max-w-md flex flex-col gap-4">
          {isEditPasswordMode ? (
            <FormPasswordInput {...passwordInputProps} />
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
                    <div className="h-10 px-4 py-2 border border-gray-300 rounded-md">
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
                    <div className="h-10 px-4 py-2 border border-gray-300 rounded-md">
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
                  className="px-4 py-2 bg-my-primary text-white rounded-md hover:bg-my-primary-hover active:bg-my-primary-active"
                >
                  Zapisz
                </FormButton>
                <FormButton
                  onClick={handleCancelClick}
                  className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 active:bg-gray-700"
                >
                  Anuluj
                </FormButton>
              </div>
            </div>
          ) : (
            <>
              <FormButton
                onClick={handleEditProfileClick}
                className="px-4 py-2 bg-my-primary text-white rounded-md hover:bg-my-primary-hover active:bg-my-primary-active"
              >
                Edytuj Profil
              </FormButton>
              {/* test user id */}

                <FormButton
                  onClick={handleChangePasswordClick}
                  className="px-4 py-2 bg-my-primary text-white rounded-md hover:bg-my-primary-hover active:bg-my-primary-active"
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

export default ModalProfileForm;
