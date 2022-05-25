import React, { useContext } from "react";
import StateContext from "./context";
import ToDo from "./ToDo"

export default function ToDoList() {

    const {state , dispatch} = useContext(StateContext);

    const updateTask = (id, updatedTask) => {

      const updatedTasks = state.tasks.map((task) => task.id === id ? updatedTask : task)
      console.log('updated tasks: ', updatedTasks)
      dispatch({ type: "TOGGLE_TASK", updatedTasks})
    }

    const deleteTask = (id) => {
      const updatedTasks = state.tasks.filter((task) => task.id !== id)
      dispatch({type: "DELETE_TASK", updatedTasks})
    }

    return (
        <div>
      {state.tasks.map((p, i) => (
        <ToDo {...p} key = {p.id} updateTask = {updateTask } deleteTask = {deleteTask}/>
      ))}
    </div>
    );
}