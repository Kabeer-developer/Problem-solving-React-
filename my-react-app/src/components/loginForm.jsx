import { useState } from "react";

function LoginForm(){
    const userId = "abcd";
    const password = "1234";
    const [user,setUser] = useState("");
    const [pass,setPass] = useState("");
    const [message,setMessage] = useState("");

  function handleSubmit(e){
    e.preventDefault();
      if(userId==user && password==pass){
        setMessage("Login succesfull")
    } else {
        setMessage("Check Credentials again")
    }
  }

    return(
        <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={user} onChange={(e)=> setUser(e.target.value)}></input>
            <input type="text" value={pass} onChange={(e)=> setPass(e.target.value)}></input>
            <button type="submit">Login</button>
        </form>
        <div>{message}</div>
        </div>
    )
}

export default LoginForm;