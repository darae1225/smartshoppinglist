import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import styles from "./EnterItem.module.css";
import { v4 as uuidv4 } from "uuid";

export default function EnterItem({ onAdd }) {
  const [inputValue, setInputValue] = useState("");
  const [groceryCategory, setGroceryCategory] = useState("");
  const category = [
    "Any",
    "Dairy",
    "Bakery",
    "Meat",
    "Seafood",
    "Asian",
    "Drinks",
  ];

  function handleChangeInputValue(e) {
    setInputValue(e.target.value);
  }

  function handleChangeGroceryCategory(e) {
    setGroceryCategory(e.target.value);
  }

  function handleClick() {
    if (inputValue.trim() === "") return;
    onAdd({
      id: uuidv4(),
      text: inputValue,
      status: "active",
      groceryCategory: groceryCategory,
      dealOption: "essential",
    });
    setInputValue("");
    setGroceryCategory("");
  }

  return (
    <section className={styles.container}>
      <section>
        <label htmlFor="text" />
        <input
          className={styles.inputValue}
          id="text"
          type="text"
          placeholder="Enter an item here"
          onChange={handleChangeInputValue}
          value={inputValue}
        />
      </section>

      <section>
        <label htmlFor="grocery-category" />
        <select
          className={styles.groceryCategory}
          id="grocery-category"
          value={groceryCategory}
          onChange={handleChangeGroceryCategory}
        >
          {category.map((category) => {
            return <option value={category}>{category}</option>;
          })}
        </select>
      </section>
      <button onClick={handleClick}>
        <FaPlus size={25} />
      </button>
    </section>
  );
}
