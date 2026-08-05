import { useState } from "react";

function Pagination(){
     const [currentPage , setCurrentPage] = useState(1);
     const itemsPerPage=5;
     const items = [
        "Item 1", "Item 2", "Item 3", "Item 4", "Item 5",
        "Item 6", "Item 7", "Item 8", "Item 9", "Item 10",
        "Item 11", "Item 12", "Item 13", "Item 14", "Item 15","Item16"
    ];
     
    const totalPages = Math.ceil(items.length/itemsPerPage);
    const startIndex = (currentPage-1)*itemsPerPage;
    const currItems = items.slice(startIndex,startIndex+itemsPerPage);
   
     return(
        <div>
         {currItems.map((item,i)=> 
         <li key={i}>{item}</li>)}
         <button disabled={currentPage==1} onClick={()=> setCurrentPage(prev=> prev-1)}>prev</button>
          {currentPage}
           <button disabled={currentPage==totalPages} onClick={()=> setCurrentPage(prev=> prev+1)}>next</button>
        </div>
     )
}
export default Pagination;