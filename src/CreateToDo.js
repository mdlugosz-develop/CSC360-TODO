import React , {useState} from "react";


export default function CreateToDo ({ user , tasks , setTasks }) {

    const [description, setDescription] = useState("");
    const [title, setTitle ] = useState("");
    const [date, setDate ] = useState("");
    const [complete, setComplete] = useState(false);

    function handleTitle(evt) {setTitle(evt.target.value)}
    function handleDescription (evt) { setDescription(evt.target.value)}

    function handleDate() {
        var today = new Date();
        var tDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        setDate(tDate)

    }

    function handleCreate (evt) {  
        const newTask = { title, description, date}
        setTasks([newTask, ...tasks])
      }


    return (
            <form onSubmit={(e) => { e.preventDefault(); handleDate(); handleCreate(e);}}>            
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