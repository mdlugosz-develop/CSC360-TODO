import React , {useContext, useState} from "react";
import StateContext from "./context";


export default function CreateToDo () {

    const {dispatch} = useContext(StateContext);
    
    const [title, setTitle ] = useState("");
    const [description, setDescription] = useState("");
    

    function handleTitle(evt) {setTitle(evt.target.value)}
    function handleDescription (evt) { setDescription(evt.target.value)}

    function handleCreate (evt) {  

        dispatch({type: 'CREATE_TASK', title, description, dateCreated: Date.now(), dateCompleted: undefined, completed: false, id: Math.floor(Math.random() * 1000000) })
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