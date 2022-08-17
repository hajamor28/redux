import React from 'react'
import { Button } from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { FilterbyAll, FilterByDone, FilterByUnDone } from '../Redux/TodoSlice'


const Filtered = () => {
    let dispatch = useDispatch()
  return (
    <div>
        <Button onClick={()=>dispatch(FilterbyAll())} variant="light">All</Button>
        <Button onClick={()=>dispatch(FilterByDone())} variant="success">Done</Button>
        <Button onClick={()=>dispatch(FilterByUnDone())} variant="danger">unDone</Button>
    </div>
  )
}

export default Filtered