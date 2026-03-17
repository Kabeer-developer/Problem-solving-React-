import { useState } from "react";

function Pagination(){
    const [currentPage,setCurrentpage] = useState(1);
    const itemsperPage = 5;
     const items = [
        "Item 1", "Item 2", "Item 3", "Item 4", "Item 5",
        "Item 6", "Item 7", "Item 8", "Item 9", "Item 10",
        "Item 11", "Item 12", "Item 13", "Item 14", "Item 15"
    ];

    const totalPages = Math.ceil(items.length/itemsperPage);
    const startIndex = (currentPage-1)* itemsperPage;
    const currentItems = items.slice(startIndex,startIndex+itemsperPage)

    return(<div>
        <ul>{currentItems.map((item,index)=>(
            <li key={index}>{item}</li>
        ))}</ul>
        <div>
            <button onClick={()=> setCurrentpage(currentPage-1)} disabled={currentPage===1}>previous</button>
            <p>page {currentPage} of {totalPages}</p>
            <button onClick={()=> setCurrentpage(currentPage+1)} disabled={currentPage===totalPages}>Next</button>
        </div>
    </div>)
}
export default Pagination;