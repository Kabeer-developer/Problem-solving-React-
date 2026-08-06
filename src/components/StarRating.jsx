import { useState } from "react";

export default function StarRating() {
  const [rating, setRating] = useState(0);
  const stars = [1,2,3,4,5];

  return(
   <div style={{fontSize:"40px"}}>
    {stars.map((star,i)=> {
   return <button key={i} onClick={()=> setRating(i+1)} style={{color : rating>i ? "gold" : "grey"}}>★</button>
    
})}
    <p>Rating : {rating}</p>
    <button onClick={()=> setRating(0)}>Reset</button>
   </div>
  );
  
}