import React, { useState } from "react";
import Stats from "../../components/stats";

const Main = () => {
  const [username, setUsername] = useState("marufAlAslam");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(e.target.username.value);
  };
  return (
    <div className="flex justify-center items-center flex-col p-20 w-full min-h-screen bg-gradient-to-tr from-black to-gray-400">
      <form
        onSubmit={handleSubmit}
        className="w-full flex justify-between items-center mb-10"
      >
        <input
          type="text"
          required
          autoComplete="off"
          placeholder="Enter your username"
          name="username"
          className="border-none border-black w-full px-4 h-[50px] border-r-transparent outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 h-[50px] px-[30px] text-white uppercase font-bold w-[15%]"
        >
          Search Github
        </button>
      </form>
      <Stats username={username} />
    </div>
  );
};

export default Main;
