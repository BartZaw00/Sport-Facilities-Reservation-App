import React, { useState } from "react";
import { FormInput, FormButton } from "../components";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // handle sign up logic here
  };

  return (
    <form
      onSubmit={handleSignUp}
      className="flex flex-col gap-5 px-10 pt-6 pb-10 "
    >
      <FormInput
        label="Email"
        id="email"
        placeholder="you@example.com"
        value={email}
        onChange={handleEmailChange}
        type="email"
        isEditMode={true}
      />
      <FormInput
        label="Hasło"
        id="password"
        placeholder="********"
        value={password}
        onChange={handlePasswordChange}
        type="password"
        isEditMode={true}
      />
      <FormInput
        label="Potwierdź hasło"
        id="confirmPassword"
        placeholder="********"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        type="password"
        isEditMode={true}
      />
      <FormButton
        onClick={handleSignUp}
        className="px-4 py-2 bg-my-primary text-white rounded-md hover:bg-my-primary-hover focus:outline-none"
      >
        Zarejestruj się
      </FormButton>
    </form>
  );
};

export default SignUpForm;
