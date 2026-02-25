import { useState } from "react";

export default function Onchange(){
    const [name,setName] = useState("");

    function updateName(e){
        setName(e.target.value);
    }

    return(<div>
        <input type="text" value={name} onChange={updateName}></input>
        <p>Student name is {name}</p>
    </div>)
}