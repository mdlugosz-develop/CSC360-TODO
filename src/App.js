import React, { useReducer } from "react";
import UserBar from "./UserBar";
import CreateToDo from "./CreateToDo";
import appReducer from "./reducers";
import ToDoList from "./ToDoList";


function App() {

  const [ state, dispatch ] = useReducer(appReducer, { user: '', tasks: [] })

  return (

    <div>
      <UserBar user = {state.user} dispatch = {dispatch} />
      {state.user && <CreateToDo user = {state.user} tasks = {state.tasks} dispatch = {dispatch}/>}
      <h1>ToDo List</h1>
      <ToDoList tasks = {state.tasks} />
    </div>
      
  );
}

export default App;
