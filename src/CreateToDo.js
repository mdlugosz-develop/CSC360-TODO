import React , {useState} from "react";


export default function CreateToDo ({ user , tasks , setTasks }) {

    const [description, setDescription] = useState("");
    const [title, setTitle ] = useState("");

    function handleTitle(evt) {setTitle(evt.target.value)}
    function handleDescription (evt) { setDescription(evt.target.value)}

    function handleCreate (evt) {  
        const newTask = { title, description, dateCreated: Date.now() , dateCompleted: null, completed : false}
        setTasks([newTask, ...tasks])
      }

    return (
            <form onSubmit={(e) => { e.preventDefault();handleCreate(e);}}>            
            <div>
                <input value={title} type="text" onChange={handleTitle} placeholder="Enter title..."  required/>
            </div>
            <div>
                <textarea value={description} type="text" onChange={handleDescription} placeholder="Enter description..."/>
            </div>
            <input type = "submit" value = "Add ToDo" />
        </form>
    );
}