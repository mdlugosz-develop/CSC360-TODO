import React from "react";
import ToDo from "./ToDo"

export default function ToDoList({ tasks = [] , setTasks }) {

    // const updateTodo = (id, toDo) => {
    //     const updatedPosts = [...tasks]
    //     updatedPosts[id] = toDo 
    //     setTasks(updatedPosts)
    // } 

    return (
        <div>
      {tasks.map((p, i) => (
        <ToDo title = {p.title} description = {p.description} id = {i} key={"toDo-" + i} />
      ))}
    </div>
    );
}