import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { GoCheck, GoX } from "react-icons/go";
import { InfoNote } from "./index";

const FormPasswordInput = ({
  password,
  setPassword,
  validPassword,
  setValidPassword,
  passwordFocus,
  setPasswordFocus,
  matchPassword,
  setMatchPassword,
  validMatch,
  setValidMatch,
  matchFocus,
  setMatchFocus,
}) => {
  return (
    <form>
      <div className="flex-1 flex flex-col gap-2">
        <label htmlFor="password" className="text-my-gray flex items-center">
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
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)}
          required
          aria-invalid={validPassword ? "false" : "true"}
          aria-describedby="passwordnote"
          onFocus={() => setPasswordFocus(true)}
          onBlur={() => setPasswordFocus(false)}
        />
      </div>
      <InfoNote
        id="passwordnote"
        icon={<FaInfoCircle />}
        text={
          <>
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
          </>
        }
        isActive={passwordFocus && password && !validPassword}
      />
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
    </form>
  );
};

export default FormPasswordInput;
