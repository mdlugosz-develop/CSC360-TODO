import React from "react";

export default function ToDo({ title, description , date  }){
    
    return (
        <div>
            <h3>{title}</h3>
            <div>{description}</div>
            <br></br>
            <div>{date}</div>
        </div>
    );
       
    
}