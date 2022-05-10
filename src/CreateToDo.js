import React , {useState} from "react";


export default function CreateToDo ({ user , tasks , dispatch }) {
    
    const [title, setTitle ] = useState("");
    const [description, setDescription] = useState("");
    

    function handleTitle(evt) {setTitle(evt.target.value)}
    function handleDescription (evt) { setDescription(evt.target.value)}

    function handleCreate (evt) {  

        dispatch({type: 'CREATE_POST', title, description })
      }

    return (
            <form onSubmit={(e) => { e.preventDefault(); handleCreate(e) }}>            
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