import React, { useContext, useEffect, useRef, useState } from "react";
import {
  FormInput,
  FormButton,
  ErrorMessage,
  SuccessMessage,
  LoadingSpinner,
} from "../components";
import { GoCheck, GoX } from "react-icons/go";
import { FaInfoCircle } from "react-icons/fa";
import { ModalContext } from "../App";

const USERNAME_REGEX = /^[a-zA-Z][a-zA-Z0-9_-]{3,29}$/;
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%])[A-Za-z\d!@#$%]{8,30}$/;

const SignUpForm = () => {
  const { setSelectedOption } = useContext(ModalContext);

  const usernameRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USERNAME_REGEX.test(username);
    setValidUsername(result);
  }, [username]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PASSWORD_REGEX.test(password);
    setValidPassword(result);
    const match = password === matchPassword;
    setValidMatch(match);
  }, [password, matchPassword]);

  useEffect(() => {
    setErrMsg("");
  }, [username, password, matchPassword]);

  const handleSignUp = async (e) => {
    e.preventDefault();

    // if button was hacked
    const usr = USERNAME_REGEX.test(username);
    const eml = EMAIL_REGEX.test(email);
    const pwd = PASSWORD_REGEX.test(password);
    if (!usr || !eml || !pwd) {
      setErrMsg("Niedozwolona operacja");
      return;
    }

    setIsLoading(true);

    fetch(`${import.meta.env.VITE_ACCOUNT_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          setErrMsg(
            "Podana Nazwa Użytkownika lub Email już istnieje. Spróbuj ponownie."
          );
        } else {
          setUsername("");
          setEmail("");
          setPassword("");
          setMatchPassword("");
          setSuccess(true);
          setTimeout(() => {
            setSelectedOption("login");
          }, 2000);
        }
      })
      .catch(() => {
        setErrMsg("Wystąpił błąd. Spróbuj ponownie.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      {success ? (
        <SuccessMessage successMsg="Pomyślnie udało się zarejestrować!" />
      ) : (
        <>
          <ErrorMessage errMsg={errMsg} ariaLive="assertive" />

          <form
            onSubmit={handleSignUp}
            className="max-w-lg flex flex-col gap-5 px-10 pt-6 pb-10 "
          >
            <div className="flex-1 flex flex-col gap-2">
              <label
                htmlFor="username"
                className="text-my-gray flex items-center"
              >
                <span>Nazwa Użytkownika:</span>
                <GoCheck
                  color="green"
                  className={validUsername ? "block" : "hidden"}
                />
                <GoX
                  color="red"
                  className={validUsername || !username ? "hidden" : "block"}
                />
              </label>
              <input
                id="username"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-my-primary"
                type="text"
                placeholder="JKowalski123"
                ref={usernameRef}
                autoComplete="off"
                onChange={(e) => setUsername(e.target.value)}
                required
                aria-invalid={validUsername ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUsernameFocus(true)}
                onBlur={() => setUsernameFocus(false)}
              />
            </div>
            <p
              id="uidnote"
              className={
                usernameFocus && username && !validUsername
                  ? "relative bg-gray-100 border border-gray-300 text-gray-600 py-2 px-4 rounded mt-2 transition-opacity"
                  : "hidden"
              }
            >
              <FaInfoCircle className="absolute right-2 top-2" />
              <span>
                Od 4 do 30 znaków.
                <br />
                Musi zaczynać się od litery.
                <br />
                Może zawierać tylko litery, cyfry, podkreślenia i myślniki.
              </span>
            </p>
            <div className="flex-1 flex flex-col gap-2">
              <label htmlFor="email" className="text-my-gray flex items-center">
                <span>Email:</span>
                <GoCheck
                  color="green"
                  className={validEmail ? "block" : "hidden"}
                />
                <GoX
                  color="red"
                  className={validEmail || !email ? "hidden" : "block"}
                />
              </label>
              <input
                id="email"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-my-primary"
                type="email"
                placeholder="jkowalski123@example.com"
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-invalid={validEmail ? "false" : "true"}
                aria-describedby="emailnote"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
              />
            </div>
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
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-my-primary"
                type="password"
                placeholder="*********"
                autoComplete="off"
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
                Musi zawierać przynajmniej jedną wielką literę, małą literę oraz
                cyfrę.
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
                  className={validMatch || !matchPassword ? "hidden" : "block"}
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
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <button
                className="px-4 py-2 bg-my-primary text-white rounded-md hover:bg-my-primary-hover focus:outline-none"
                disabled={
                  !validUsername || !validPassword || !validMatch ? true : false
                }
              >
                Zarejestruj się
              </button>
            )}
          </form>
        </>
      )}
    </>
  );
};

export default SignUpForm;
