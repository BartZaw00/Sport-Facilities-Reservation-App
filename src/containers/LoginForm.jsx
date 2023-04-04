import React, { useContext, useEffect, useRef, useState } from "react";
import {
  FormInput,
  FormButton,
  ErrorMessage,
  SuccessMessage,
  LoadingSpinner,
} from "../components";
import { ModalContext } from "../App";
import useAuth from "../hooks/useAuth";

const LoginForm = () => {
  const { setIsModalOpen } = useContext(ModalContext);
  const { login } = useAuth();

  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    fetch(`${import.meta.env.VITE_ACCOUNT_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then(async (response) => {
        console.log(response);
        const data = await response.json();
        console.log(data);
        const {
          userId: id,
          photoUrl,
          username,
          name,
          surname,
          email,
          roleId: role,
          token,
        } = data;
        if (response?.status === 200) {
          login({ id, photoUrl, username, name, surname, email, role, token });
          setSuccess(true);
          setTimeout(() => {
            setIsModalOpen(false);
          }, 2000);
        }
      })
      .catch((error) => {
        console.log(error);
        setErrMsg("Podany Email lub Hasło są błędne. Spróbuj ponownie.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      {success ? (
        <SuccessMessage successMsg="Pomyślnie udało się zalogować!" />
      ) : (
        <>
          <ErrorMessage errMsg={errMsg} />
          <form
            onSubmit={handleLogin}
            className="flex flex-col gap-5 px-10 pt-6 pb-10 "
          >
            <div className="flex-1 flex flex-col gap-2">
              <label htmlFor="email" className="text-my-gray">
                Email
              </label>
              <input
                type="email"
                id="email"
                ref={emailRef}
                placeholder="jan.kowalski@gmail.com"
                value={email}
                onChange={handleEmailChange}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-my-primary"
              />
            </div>
            <FormInput
              label="Password"
              id="password"
              placeholder="*********"
              value={password}
              onChange={handlePasswordChange}
              type="password"
              isEditMode={true}
            />
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <FormButton
                onClick={handleLogin}
                className="px-4 py-2 bg-my-primary text-white rounded-md hover:bg-my-primary-hover focus:outline-none"
              >
                Zaloguj się
              </FormButton>
            )}
          </form>
        </>
      )}
    </>
  );
};

export default LoginForm;
