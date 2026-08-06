import { useState } from "react";

function Toggle(){
    const [isdark,setIsDark] = useState(false);

   const darkTheme = {
    backgroundColor : "black",
    color : "white",
   }

   const lightTheme = {
    backgroundColor : "white",
    color : "black",
   }

    return(
       <div style={{...isdark?darkTheme:lightTheme,minHeight:"100vh"}}>
        <h1>Hi Kabeer!</h1>
        <button onClick={()=> setIsDark(!isdark)}>{isdark?"Light":"Dark"}</button>
       </div>
    )
}

export default Toggle;