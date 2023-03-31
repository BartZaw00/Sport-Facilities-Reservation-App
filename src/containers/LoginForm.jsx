import React, { useContext, useEffect, useRef, useState } from "react";
import { FormInput, FormButton } from "../components";
import { ModalContext } from "../App";
import AuthContext from "../context/AuthProvider";

const LoginForm = () => {
  const { setIsModalOpen } = useContext(ModalContext);
  const { setAuth } = useContext(AuthContext);

  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

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
        const token = data?.token;
        const role = data?.roles;
        setAuth({ user, password, role, token });

        if (response?.ok) {
          setEmail("");
          setPassword("");
          setSuccess(true);
          setTimeout(() => {
            setIsModalOpen(false);
          }, 2000);
        }
      })
      .catch((error) => {
        
        console.log(error);
      });
  };

  return (
    <>
      {success ? (
        <p>Udalo się!</p>
      ) : (
        <>
          <p ref={errRef}>{errMsg}</p>
          <form
            onSubmit={handleLogin}
            className="flex flex-col gap-5 px-10 pt-6 pb-10 "
          >
            <FormInput
              label="Email"
              id="email"
              placeholder="jan.kowalski@gmail.com"
              value={email}
              onChange={handleEmailChange}
              type="email"
              isEditMode={true}
              propRef={emailRef}
            />
            <FormInput
              label="Password"
              id="password"
              placeholder="*********"
              value={password}
              onChange={handlePasswordChange}
              type="password"
              isEditMode={true}
            />
            <FormButton
              onClick={handleLogin}
              className="px-4 py-2 bg-my-primary text-white rounded-md hover:bg-my-primary-hover focus:outline-none"
            >
              Zaloguj się
            </FormButton>
          </form>
        </>
      )}
    </>
  );
};

export default LoginForm;
