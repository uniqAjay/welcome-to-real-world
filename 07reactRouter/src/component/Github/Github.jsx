/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

 const data = useLoaderData()

//   const [data, setData] = useState([])
//   useEffect(() => {
//     fetch('https://api.github.com/users/hiteshchoudhary')
//       .then(response => response.json())
//       .then(response => setData(response))
//   },[])


  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers : {data.followers}
      <img src={data.avatar_url} width={300} className="rounded-full" alt="" />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {

    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json();
}