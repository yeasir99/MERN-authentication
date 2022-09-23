import React, { useState } from 'react';

export const Signup = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
  });
  const handleChange = e =>
    setState({ ...state, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="max-w-md mx-auto px-2">
        <h1 className="text-center text-2xl font-semibold capitalize mb-5">
          set up your account
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Name"
            value={state.name}
            className="w-full rounded-md mb-2"
          />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={state.email}
            placeholder="Email"
            className="w-full rounded-md mb-2"
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={state.password}
            placeholder="password"
            className="w-full rounded-md mb-2"
          />
          <button
            type="submit"
            className="w-full rounded-md mb-2 bg-green-400 py-2 text-gray-800 font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
