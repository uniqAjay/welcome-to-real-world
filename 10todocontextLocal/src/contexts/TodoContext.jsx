/* eslint-disable no-unused-vars */
import { useContext, createContext } from "react";

const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "welcome to my toDO",
      completed: false,
    },
  ],

  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toogleComplete: (id) => {},
});



export  const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider