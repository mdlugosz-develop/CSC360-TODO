import React from "react";

export default function ToDo({ title, description , dateCreated, dateCompleted, complete, id, updateTodo }){
    
    // function handleCheckbox(event){
    //     const newToDo = {
    //         title,
    //         description, 
    //         dateCreated,
    //         dateCompleted: Date.now(),
    //         complete: event.target.checked,
    //     }
    //     updateTodo(id, newToDo)
    //     console.log("checked")
    // }


    return (
        <div>
            <h3>{title}</h3>
            <div>{description}</div>
            <br/>
            {/* <div>{dateCreated}</div>
            <div>{dateCompleted}</div> */}
            {/* <input type = "checkbox" value ={complete} onChange = {handleCheckbox} /> */}
        </div>
    );
       
    
}