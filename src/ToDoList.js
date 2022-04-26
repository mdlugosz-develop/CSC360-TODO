import React from "react";
import ToDo from "./ToDo"

export default function ToDoList({ tasks = [] }) {
    return (
        <div>
      {tasks.map((p, i) => (
        <ToDo {...p} key={"toDo-" + i} />
      ))}
    </div>
    );
}