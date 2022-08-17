import React, { useState } from "react";
import { Form,Button } from "react-bootstrap";
import {useDispatch} from 'react-redux'
import { AddTodo,DeleteAdd } from "../Redux/TodoSlice";

const AddTodos = () => {
    let dispatch = useDispatch()
    let [todo,setTodo] = useState('')
    const Added = ()=>{
        dispatch(AddTodo({id:Math.random(),task:todo,isDone:false}))
        setTodo('')
    }
  return (
    <div>
      <Form style={{display:'flex',justifyContent:'center'}}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control value={todo} onChange={(e)=>setTodo(e.target.value)} style={{width:'300px'}} type="text" placeholder="Enter todo" />
        </Form.Group>
        <Button onClick={Added} variant="primary">Add</Button>
      </Form>
    </div>
  );
};

export default AddTodos;