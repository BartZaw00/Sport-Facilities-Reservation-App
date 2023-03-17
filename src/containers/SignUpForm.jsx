import React from "react";

const SignUpForm = () => {
  return (
    <div className="flex flex-col gap-5 px-10 pt-6 pb-10">
      <div className="flex flex-col gap-4">
        <label htmlFor="name" className="text-my-gray">
          Nazwa
        </label>
        <input
          type="text"
          id="name"
          placeholder="John Doe"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-my-primary"
        />
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="email" className="text-my-gray">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="you@example.com"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-my-primary"
        />
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="password" className="text-my-gray">
          Hasło
        </label>
        <input
          type="password"
          id="password"
          placeholder="********"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-my-primary"
        />
      </div>
      <button className="px-4 py-2 bg-my-primary text-white rounded-md hover:bg-my-primary-dark focus:outline-none">
        Zarejestruj się
      </button>
    </div>
  );
};

export default SignUpForm;
