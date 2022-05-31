import React, { useEffect, useReducer } from "react";
import UserBar from "./UserBar";
import CreateToDo from "./CreateToDo";
import appReducer from "./reducers";
import ToDoList from "./ToDoList";

import StateContext from "./context";


function App() {

  const [ state, dispatch ] = useReducer(appReducer, { user: '', tasks: [] })

  useEffect(() => {
    if(state.user) {
      document.title = `${state.user}'s Tasks`
    } else {
      document.title = 'Tasks'
    }
  }, [state.user])

  return (

      <StateContext.Provider value={{state, dispatch}}>
        <UserBar/>
        {state.user && <CreateToDo />}
        <h1>ToDo List</h1>
        <ToDoList/>
      </StateContext.Provider> 
  );
}

export default App;
