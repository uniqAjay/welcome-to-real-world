/* eslint-disable no-unused-vars */
import React from "react";
import userContext from "../context/userContext";
import { useContext } from "react";

function Profile() {
    
  const {user} = useContext(userContext)

  if (!user) return <div>Please LogIn</div>

  return<div>Welcome {user.userName}</div>
}

export default Profile;
