import { useEffect, useState } from "react";

export default function Timer() {
    const [timer,setTimer]=useState(-50);
    const [isRunning,setIsRunning]=useState(false);

    useEffect(()=>{
        if(timer<0) return window.alert("Invalid time");
        let interval;
        if(isRunning){
            if(timer==0) window.alert("Timer Completed");
            if(timer>0){
                interval =setInterval(() => {
                    setTimer((prev)=> prev-1);
                }, 1000);
            } 
        }
        return ()=> clearInterval(interval);
    })

    return (
        <div>
          {timer}
          <button onClick={()=> setIsRunning(true)}>Start</button>
        </div>
    );
}