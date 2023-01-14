import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState("")
  const [button, setButton ] = useState("Add to Cart")

  function addCart(){
    if(cart === ""){
      setCart("in-cart")
      setButton("Remove from Cart")
    }else{
      setCart("")
      setButton("Add to cart")
    }
  }


  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addCart}>{button}</button>
    </li>
  );
}

export default Item;
