import React, { useState } from "react";
import { FormInput, FormButton } from "../components";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // handle login logic here
  };

  return (
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
  );
};

export default LoginForm;
