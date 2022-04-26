import React , {useState} from "react";


export default function CreateToDo ({ user , tasks , setTasks }) {

    const [ task, setTask] = useState("");
    
    function handleTask (evt) { setTask(evt.target.value) }
    function handleCreate (evt) {  
        const newTask = { task }
        //console.log(newPost)
        // const newPostCopy = { ...newPost }
         setTasks([newTask, ...tasks])
      }


    return (
            <form onSubmit={(e) => { e.preventDefault(); handleCreate(e) }}>            
            <div>
                <input value={task} type="text" onChange={handleTask} placeholder="Enter task..."/>
            </div>
            <input type = "submit" value = "Create" />
        </form>
    );
}