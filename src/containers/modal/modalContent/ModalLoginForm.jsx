import React, { useContext, useEffect, useRef, useState } from "react";
import { ModalContext } from "../../../App";
import useAuth from "../../../hooks/useAuth";
import { ErrorMessage, LoadingSpinner, SuccessMessage } from "../../../components/sharedComponents";
import { FormButton, FormInput } from "../../../components/formComponents";
import { loginUser } from "../../../services/AccountService";

const ModalLoginForm = () => {
  // Destructure setIsModalOpen and setSelectedOption from the ModalContext
  const { setIsModalOpen, setSelectedOption } = useContext(ModalContext);

  // Get the login function from the useAuth hook
  const { login } = useAuth();

  // Create ref variable for email input
  const emailRef = useRef();

   // Declare state variables for email, password, success, error message, and loading status
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Use useEffect to focus on email input when the component mounts
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  // Use useEffect to reset error message when email or password changes
  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  // Handle change of email input
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle change of password input
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      // Call loginUser function with email and password
      const userData = await loginUser(email, password);

      // Call login function with user data
      login(userData);

      // Set success state to true
      setSuccess(true);

      // Close modal after 2 seconds
      setTimeout(() => {
        setIsModalOpen(false);
      }, 2000);

      // Clear timeout to prevent any potential memory leaks
      return () => clearTimeout(modalTimeout);
    } catch {
      // Set error message for invalid email or password
      setErrMsg("Podany Email lub Hasło są błędne. Spróbuj ponownie.");
    } finally {
      // Set isLoading state to false
      setIsLoading(false);
    }
  };

  // Handle test account login button click
  const handleTestAccountLogin = async (e) => {
    setIsLoading(true);
  
    try {
      // Call loginUser function with test account email and password
      const userData = await loginUser("test@test.com", "Test1234!");

      // Call login function with user data
      login(userData);

      // Set success state to true
      setSuccess(true);

      // Close modal after 2 seconds
      setTimeout(() => {
        setIsModalOpen(false);
      }, 2000);

      // Clear timeout to prevent any potential memory leaks
      return () => clearTimeout(modalTimeout);
    } catch {
      // Set error message for invalid email or password
      setErrMsg("Podany Email lub Hasło są błędne. Spróbuj ponownie.");
    } finally {
      // Set isLoading state to false
      setIsLoading(false);
    }
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
              <FormButton className="px-4 py-2 bg-my-primary text-white rounded-md hover:bg-my-primary-hover active:bg-my-primary-active focus:outline-none">
                Zaloguj się
              </FormButton>
            )}
          </form>
          <div className="text-center">
            <p>
              Nie masz konta?{" "}
              <span
                onClick={() => setSelectedOption("signup")}
                className="text-my-primary hover:text-my-primary-hover cursor-pointer"
              >
                Zarejestruj się
              </span>
            </p>
          </div>
          <div className="text-center mt-6">
            <p>
              Nie chcesz rejestrować konta?
              <br />
              <span
                onClick={handleTestAccountLogin}
                className="text-my-primary hover:text-my-primary-hover cursor-pointer"
              >
                Skorzystaj z konta testowego
              </span>
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default ModalLoginForm;
