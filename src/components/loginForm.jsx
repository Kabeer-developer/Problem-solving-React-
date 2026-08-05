import { useState } from "react";

function LoginForm(){
    const username = "kabeer";
    const password = "Kabeer@123";
    
    const [user,setUser] = useState("");
    const [pass,setPass] = useState("");
    const [msg,setMsg] = useState("Login to continue");

    function formSubmit(e){
      e.preventDefault();

      if(user==username && pass == password){
        setMsg("Welcome to Dashboard");
      } else {
        setMsg("Check credencials");
      }
    }
    return(
      <form onSubmit={formSubmit}>
        <input type="text" value={user} placeholder="Username" onChange={(e)=> setUser(e.target.value)}></input>
        <input type="password" value={pass} placeholder="Password" onChange={(e)=> setPass(e.target.value)}></input>
        <button>Login</button>

        <p>{msg}</p>
      </form>
    )
    
}

export default LoginForm;