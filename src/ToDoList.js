import React from "react";
import ToDo from "./ToDo"

export default function ToDoList({ tasks = [] }) {
    return (
        <div>
      {tasks.map((p, i) => (
        // <Post title={p.title} content={p.content} author={p.author} key={"post-" + i} />
        <ToDo {...p} key={"toDo-" + i} />
      ))}
    </div>
    );
}