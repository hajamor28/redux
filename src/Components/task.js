import React, { useState } from 'react'
import { Button } from "react-bootstrap";
import {useDispatch} from 'react-redux'
import { DeleteAdd,ToggleTodo,UpdateTodo } from '../Redux/TodoSlice';


const Todo = ({todos}) => {
  let [isEdited,setIsEdited] = useState(false)
  let [updatedTask,setUpdatedTask] = useState('')
  const Updated = ()=>{
    setIsEdited(!isEdited)
    setUpdatedTask(todos.task)
   isEdited && dispatch(UpdateTodo({id:todos.id,task:updatedTask}))
  }

  let dispatch= useDispatch()
    console.log(todos)
  return (
    <div style={{display:'flex',justifyContent:'center',marginTop:'40px'}}>
      {isEdited? <input type='text' value={updatedTask} onChange={(e)=>setUpdatedTask(e.target.value)} /> : 
      <h2 style={{width:'300px',marginRight:'10px',textDecoration: todos.isDone? 'line-through': ''}}>{todos.task}</h2>
      }
      
      <Button variant="danger" onClick={()=>dispatch(DeleteAdd(todos.id))} >Delete</Button>
      <Button onClick={()=>dispatch(ToggleTodo(todos.id))} variant="light">{todos.isDone ? 'Done' : 'UnDone'}</Button>
      <Button onClick={Updated} variant="primary">Update</Button>

    </div>
  )
}

export default Todo