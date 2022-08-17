import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import AddTodos from './Components/Addtask';
import Filtered from './Components/Filtre'
import TodoList from './Components/ListTask'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  
  let todos = useSelector(state=> state.Todo.todos)
  let Filter = useSelector(state=> state.Todo.Filter)
  return (
    <div className="App">
     <h1>TodoList</h1>
     <hr/>
     <AddTodos/>
     <TodoList todos={(Filter=='Done')? todos.filter(el=> el.isDone== true): (Filter=='UnDone')? todos.filter(el=> el.isDone==false): todos} />
      <hr/>
      <Filtered/>




</div>
  )
}

export default App;
