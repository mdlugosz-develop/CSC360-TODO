import React, { useReducer } from "react";
import UserBar from "./UserBar";
import CreateToDo from "./CreateToDo";
import appReducer from "./reducers";
import ToDoList from "./ToDoList";

import StateContext from "./context";


function App() {

  const [ state, dispatch ] = useReducer(appReducer, { user: '', tasks: [] })

  return (

    <div>

      <StateContext.Provider value={{state, dispatch}}>
        <UserBar/>
        {state.user && <CreateToDo />}
        <h1>ToDo List</h1>
        <ToDoList/>
      </StateContext.Provider> 
    </div>
      
  );
}

export default App;
