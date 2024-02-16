/* eslint-disable no-unused-vars */
import React, { useId } from "react";

import { useParams } from "react-router-dom";

function User() {
  const { userInfo } = useParams();
  return (
    <div className="text-center bg-slate-500 m-4 p-4 text-white text-xl">
    user:{userInfo}
    </div>
  );
}

export default User;
