import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCtegory, setSelectedCategory] = useState("All")

  

  function changeList(event){
    setSelectedCategory(event.target.value)
  }

  const updatedList = items.filter((food) => {
    if (selectedCtegory === "All") {
      return true;
    } else {
      return food.category=== selectedCtegory;
    }
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={changeList}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        { updatedList.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
