import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';




function Myapp(){


  const choo_loo = 'kho gye hai hum bhi yha'
  return <h1> Welcome To The Himachal Pradesh (devbhumi){choo_loo}</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <Myapp/>

);


