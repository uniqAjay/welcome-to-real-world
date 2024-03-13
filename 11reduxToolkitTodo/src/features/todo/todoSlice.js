/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-labels */
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 123,
      text: "Welcome To My World",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload
      };

      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action) => {
      console.log(action.payload.text)
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, text:action.payload.text} : todo
      );

      
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
