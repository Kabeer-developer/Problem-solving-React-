import { useState } from "react";

export default function Tabs(){
    const [tab,setTab] = useState("home");

    const tabs = [
        {id: "home",label : "Home"},
        {id: "profile",label : "Profile"},
        {id: "settings",label : "Settings"},
    ]
    
    return(
        <div>
            <div>
                {tabs.map((tab)=>
                <button key={tab.id} onClick={()=> setTab(tab.id)}>{tab.label}</button>)}
            </div>
            <div>
                {tab=="home" && <p>Welcome to Dashboard</p>}
                {tab=="profile" && <p>Profile Details</p>}
                {tab=="settings" && <p>Settings</p>}
            </div>
        </div>
    )
}