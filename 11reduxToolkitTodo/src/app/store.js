import {configureStore} from '@reduxjs/toolkit'
import todoREducer from '../features/todo/todoSlice' 

export const store = configureStore({

    reducer:todoREducer
})