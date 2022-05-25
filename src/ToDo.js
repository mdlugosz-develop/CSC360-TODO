import React, {useState} from "react";

export default function ToDo({ title, description , dateCreated, dateCompleted, completed, id, updateTask, deleteTask }){
    
    const [checked, updateCheck] = useState(false)
    
    const handleCheckbox = (event) => {

        updateCheck(event.target.checked)
        const updatedTask = {title, description ,dateCreated, id, dateCompleted: Date.now(), completed: !completed}
        updateTask(id, updatedTask)
    }

    return (
        <div>
            <h3>{title}</h3>
            <div>{description}</div>
            <br/>
            <div>Date Created: {new Date(dateCreated).toDateString() }</div>
            <div>Date Completed: {completed ? new Date(dateCompleted).toDateString() : 'Not yet completed'}</div>
            <input type = "checkbox" value ={checked} onClick = {handleCheckbox} />
            <input type = "button" value = "Delete Task" onClick={() => deleteTask(id)}/>
        </div>
    );
       
    
}