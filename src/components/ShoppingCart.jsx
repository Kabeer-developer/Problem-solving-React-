import { useState } from "react";

export default function ShoppingCart(){
    const products = [
        {id:1,name:"laptop",price:1000,quantity:1},
        {id:2,name:"Mobile",price:500,quantity:1},
        {id:3,name:"Tv",price:2000,quantity:1},
        {id:4,name:"Fridge",price:4000,quantity:1},
    ];
    
    const [cart,setCart] = useState([])
    
    function addToCart(product){
        setCart([...cart,product]);
    }

    function delCartItem(index){
        const updatedCart = cart.filter((item,i)=> index != i);
        setCart(updatedCart);
    }

    function incQuantity(index){
        const updatedCart = cart.map((item,i)=> index == i ? {...item,quantity: item.quantity+1}:item);
        setCart(updatedCart);
    }

    function decQuantity(index){
         if(cart[index].quantity==1){
            delCartItem(index);
            return;
        }
        const updatedCart = cart.map((item,i)=>
           
             index == i ? {...item,quantity: item.quantity-1}:item);
        setCart(updatedCart);
    }
    
    return(
        <div>
          <div>
            {products.map((item,index)=> {
                return <div key={index}>
                    <p>Item id : {index+1} </p>
                    <p>Item Name : {item.name}</p>
                    <p>Item Price : {item.price}</p>
                    <button onClick={()=> addToCart(item)}>Add to Cart</button>
                </div>
            })}
          </div>
          <br></br>
          <div> Your Cart
            {cart.map((item,index)=> {
                return <div key={index}>
                    <p>Item Name : {item.name}</p>
                    <p>Item Price : {item.price} </p>
                    <p>Item Quantity :
                        <button onClick={()=> decQuantity(index)}>-</button>
                         {item.quantity}
                         <button onClick={()=> incQuantity(index)}>+</button>
                         </p>
                    
                    <button onClick={()=> delCartItem(index)}>Remove</button>
                </div>
            })}
          </div>

          Total : {cart.reduce((total,item)=> item.price * item.quantity ,0)}
        </div>
    )
}