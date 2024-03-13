import { useState } from 'react'
import './App.css'
import AddTodo from './component/AddTodo'
import Todos from './component/Todo'

function App() {


  return (
    <>
    <h1>Welcome to the redux</h1>
     <AddTodo/>
     <Todos/>
    </>
  )
}

export default App
