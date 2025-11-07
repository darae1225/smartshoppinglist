import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import styles from "./EnterItem.module.css";
import { v4 as uuidv4 } from "uuid";

export default function EnterItem({ onAdd }) {
  const [inputValue, setInputValue] = useState("");
  const [groceryCategory, setGroceryCategory] = useState("");

  function handleChangeInputValue(e) {
    setInputValue(e.target.value);
  }

  function handleChangeGroceryCategory(e) {
    console.log(e.target.value);
  }

  function handleClick() {
    console.log(inputValue);
    onAdd({
      id: uuidv4(),
      text: inputValue,
      status: "active",
      groceryCategory: groceryCategory,
      dealOption: "essential",
    });
  }

  return (
    <section className={styles.container}>
      <section>
        <label htmlFor="text" />
        <input
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
          id="grocery-category"
          value={groceryaCategory}
          onChange={handleChangeGroceryCategory}
        >
          <option value="Any">Any</option>
          <option value="Bakery">Bakery</option>
          <option value="Dairy">Dairy</option>
        </select>
      </section>
      <button onClick={handleClick}>
        <FaPlus size={25} />
      </button>
    </section>
  );
}
