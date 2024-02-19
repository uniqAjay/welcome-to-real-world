/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import userContext from "../context/userContext";

function LogIn() {
  const [userName, setUserName] = useState(" ");
  const [password, setPassword] = useState(" ");

  const {setUser} = useContext(userContext)

  const handleEvent = (e) => {
    e.preventDefault()
    setUser({ userName, password });
  };
  return (
    <div>
      <h2>Log In</h2>
      <input
        type="text"
        value={userName}
        placeholder="userId"
        onChange={(e) => setUserName(e.target.value)}
      />{" "}
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleEvent}>submit</button>
    </div>
  )
}

export default LogIn;
