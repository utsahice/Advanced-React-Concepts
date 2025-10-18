import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      })
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload)
      if (task) task.completed = !task.completed
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload)
    },
  },
})

export const { addTask, toggleTask, deleteTask } = todosSlice.actions
export default todosSlice.reducer
