import { useState } from "react";

export default function Array(){
  const [array,setArray] = useState(["a","b","c"]);
  const [input,setInput] = useState("");

  function add(){
   setArray(a=> [...a,input]);
   setInput("");
  }

  function deleteElement(index){
   setArray(array.filter((_,i)=> index != i));
  }

   return(<div>
      <input value={input} onChange={(e)=> setInput(e.target.value)} placeholder="Enter Alphabet"></input>
      <button onClick={()=> add()}>Add</button>
      <ul>{array.map((a,i)=> 
      <li key={i}>{a} <button onClick={()=> deleteElement(i)}>X</button> </li>)}</ul>
   </div>)
}