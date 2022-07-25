import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [text, setText] = useState('')

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }


  const onSearchChange = (e) => {
    setText(e.target.value)
  }

  // const itemsFiltered = items.filter((item) => {
  //   // if (setText === '') return true;

  //   return item.name === text;
  // })

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  })
    .filter((item) => item.name.toLowerCase().includes(text.toLowerCase()));

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter onSearchChange={onSearchChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />

        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
