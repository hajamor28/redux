import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name:'todos',
    initialState: {
        todos:[{
            id:Math.random(),
            task:'Learn Express',
            isDone:false
        }],
        Filter:'All'
    },

    reducers:{
        AddTodo : (state,action)=>{
           state.todos.push(action.payload)
        },
        DeleteAdd :(state,{type,payload})=>{
            const deleted=  state.todos.filter(el=> el.id !== payload)
           state.todos = deleted
        },
        ToggleTodo:(state,action)=>{
            state.todos.map(el=> (el.id == action.payload)? el.isDone= !el.isDone : el.isDone)
        },
        UpdateTodo:(state,{type,payload})=>{
          state.todos.map(el=> (el.id == payload.id)? el.task= payload.task : el.task )
        },
        FilterByDone :(state)=>{
          state.Filter= 'Done'
        },
        FilterByUnDone :(state)=>{
            state.Filter= 'UnDone'
          },
        FilterbyAll: (state)=>{
            state.Filter = 'All'
        }
    }

})

export default TodoSlice.reducer
export const {AddTodo,DeleteAdd,ToggleTodo,FilterByDone,FilterByUnDone,FilterbyAll,UpdateTodo} = TodoSlice.actions