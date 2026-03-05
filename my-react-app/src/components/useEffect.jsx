import { useState,useEffect } from "react";

export default function Counter1(){
const [count,setCount]=useState(0);

useEffect(()=> {
    console.log("Count updated")
});

useEffect(()=> {
    console.log("count program created")
},[]);

useEffect(()=> {
    console.log("count incremented");
},[count]);

function update(){
    setCount(c=>c+1);
}
return(<>
<p>Count is {count}</p>
<button onClick={update}>Update count</button></>)
}