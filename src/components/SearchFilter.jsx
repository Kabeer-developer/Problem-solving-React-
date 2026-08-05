import { useState } from "react";

function SearchFilter(){
    const [search,setSearch] = useState("");
    const items = ["pineapple","Apple","Banana","Papaya","pomogrenate"];

   const filtered = items.filter((item,i)=> item.toLowerCase().includes(search.trim().toLowerCase()));

   return(
    <div>
        <input value={search} onChange={(e)=> setSearch(e.target.value)} placeholder="Search"></input>
        {filtered.map((item,i)=>
        <li key={i}>{item}</li>)}
    </div>
   )
}

export default SearchFilter;