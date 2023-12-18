import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  const addValue = () => {
    setCounter((p) => 
   p >= 20 ? p * 0 : p + 1

   );
   
  }
  const removeValue = () => {
    setCounter((p) => 
   p <= 0 ? p * 0 : p - 1

   );
  

  
    
  }


  return (
    <>
      <h1>Welcome to the react</h1>
      <h2>Counter value {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>remove value</button>
      <h3>footer{counter}</h3>
    </>
  )

}

export default App
