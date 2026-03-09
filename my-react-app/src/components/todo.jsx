import { useState } from "react";

function Todo(){
    const [task,setTask] = useState("");
    const [todos,setTodo]=useState([]);

    function addTodo(){
        if(!task.trim()) return
        setTodo([...todos,task]);
        setTask("");
    }

    function delTodo(index){
        setTodo(todos.filter((_,i)=> i!==index));
    }

    return(
        <div>
            <input type="text" value={task} onChange={(e)=> setTask(e.target.value)}></input>
            <button onClick={addTodo}>Add</button>
            {todos.map((todo,index)=> {
               return <div key={index}>{todo}<button onClick={()=> delTodo(index)}>Delete</button>
                </div>
            })}
        </div>
    )
}

export default Todo;