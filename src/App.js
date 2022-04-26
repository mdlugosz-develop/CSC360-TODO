import React, { useState } from "react";
import UserBar from "./UserBar";
import CreateToDo from "./CreateToDo";
import ToDoList from "./ToDoList";

function App() {

  const[user, setUser] = useState("");
  const[tasks, setTasks] = useState([]);


  return (

    <div>

      <UserBar user = {user} setUser = {setUser}/>
      {user && <CreateToDo user = {user} tasks = {tasks} setTasks = {setTasks}/>}
      <ToDoList tasks = {tasks} />

    </div>
      
  );
}

export default App;
