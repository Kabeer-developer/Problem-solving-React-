import { useState } from "react";

function Toggle(){
    const [isDark,setIsdark] = useState(false);

    const lightTheme = {
        backgroundColor: "white",
        color:"black"
    }

    const darkTheme = {
        backgroundColor:"black",
        color:"white",
    }

    return(
        <div style={{...(isDark ? darkTheme :lightTheme),minHeight:"100vh"}}>
            <p>Hello this content changes theme changes with respect to theme</p>
            <button onClick={()=> setIsdark(!isDark)}>{isDark?"light theme":"dark theme"}</button>
        </div>
    )
}

export default Toggle;